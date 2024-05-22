import { Sequelize } from 'sequelize-typescript';

const MODELS_PATH = [__dirname + '/../models/*'];

export default class SequelizeDb {
  private static instance: SequelizeDb;
  private static dbClient: Sequelize;
  private static isReady: boolean;

  private constructor() {
    SequelizeDb.isReady = false;
  }

  public static async getDbInstance(): Promise<Sequelize> {
    if (!SequelizeDb.instance) {
      SequelizeDb.instance = new SequelizeDb();
      SequelizeDb.dbClient = new Sequelize(
        process.env.DB_NAME || '',
        process.env.DB_USERNAME || '',
        process.env.DB_PASSWORD,
        {
          port: (process.env.DB_PORT as unknown as number) || 3306,
          host: process.env.DB_HOST || 'localhost',
          dialect: 'mysql',
          pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
          },
          retry: {
            max: 5,
            timeout: 10000,
          },
          modelMatch: (filename, member) => {
            return filename.substring(0, filename.indexOf('.model')) === member;
          },
        }
      );

      try {
        await SequelizeDb.dbClient.authenticate();
        console.log('DB Connection has been established.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
      }

      try {
        SequelizeDb.dbClient.addModels(MODELS_PATH);
      } catch (error) {
        console.error('Model load error:', error);
        throw error;
      }
    }

    SequelizeDb.isReady = true;
    return SequelizeDb.dbClient;
  }

  public static async close() {
    SequelizeDb.close();
  }

  public static isDbReady(): boolean {
    return SequelizeDb.isReady;
  }
}
