import SequelizeDb from '../services/sequelizedb';
import dotenv from 'dotenv';

export default async function setup() {
  dotenv.config({
    path: '.env.test',
  });
  console.log('DB_NAME', process.env.DB_NAME);
  const db = await SequelizeDb.getDbInstance();
  await db.close();
  console.log('Db closed');
}
