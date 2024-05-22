/**
 * 
 * This file is used to create a mock database for testing purposes.
 * 
 */
import { Sequelize } from 'sequelize-typescript';

const MODELS_PATH = [__dirname + '/../models/*'];

let mockInstance: Sequelize;

export async function getMockDb() {
  if (!mockInstance) {
    console.log('Initializing mock db')
    const mockDb = new Sequelize({
      dialect: 'sqlite',
      database: ':memory:',
      storage: ':memory:',
      username: 'root',
      password: '',
      models: MODELS_PATH,
      modelMatch: (filename, member) => {
        return filename.substring(0, filename.indexOf('.model')) === member;
      },
    });
    await mockDb.authenticate();
    await mockDb.sync({ force: true })
    
    console.log('Loaded models: ', mockDb.models);
    mockInstance = mockDb;
  }
  return mockInstance;
}