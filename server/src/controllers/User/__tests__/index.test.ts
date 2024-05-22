import { User } from '../../../models/User.model'
import { Faculty } from '../../../models/Faculty.model';
import { Sequelize } from 'sequelize-typescript';
import { getMockDb } from '../../../services/mockdb';
describe('User API', () => {
  let mockDb: Sequelize;

  beforeAll(async() => {
    mockDb = await getMockDb();
  });

  afterAll(async() => {
    await mockDb.close();
  });

  afterEach(async() => {
    await User.destroy({ where: {} });
    await Faculty.destroy({ where: {} });
  });

  test('findAll', async () => {
    const result = await User.findAll();
    console.log('findAll', result)
    expect(result.length).toBe(0);
  });

  test('findOne', async () => {
    try {
      await Faculty.create({ lastname: 'test', middlename: 'test', firstname: 'test', educ_attainment: 'test', mother_dept: 'test', status: 'test'});
      const faculty = await Faculty.findOne({ where: { lastname: 'test' }});
      await User.create({ username: faculty?.id, password: 'test' });
      const result = await User.findOne({ where: { username: faculty?.id }});
      expect(result?.username).toBe(1);
    } catch (error) {
      console.log(error)
      throw error
    }    
  });
});
