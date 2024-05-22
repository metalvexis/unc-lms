import { login } from '..';
import dotenv from 'dotenv';
import SequelizeDb from '../../../services/sequelizedb';
describe('Authentication', () => {
  beforeAll(async() => {
    dotenv.config({
      path: '.env.test',
    });
    await SequelizeDb.getDbInstance();
  });

  afterAll(async() => {
    (await SequelizeDb.getDbInstance()).close();
  });

  test('login should return user', async () => {
    const res = await login('1034', 'password!');
    console.log('TestUser', res)
    expect(res?.user?.username).toBe(1034);
  });
});
