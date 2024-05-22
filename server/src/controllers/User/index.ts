import express from 'express';
import { User } from '../../models/User.model';
import { Faculty } from '../../models/Faculty.model';
import { Period } from '../../models/Period.model';
import { Department } from '../../models/Department.model';
import { Attributes, FindOptions } from 'sequelize';

export const route = express.Router();

route.get('/', async (req, res) => {
  const userId = req.query.id;

  const userArgs: FindOptions<Attributes<User>> = {
    include: [
      {
        model: Faculty,
        include: [
          { model: Department, as: 'asDean' },
          { model: Department, as: 'asAssistantDean' },
          { model: Department, as: 'asProgramHead' },
          { model: Period },
        ],
      },
    ],
    attributes: { exclude: ['password'] },
  };

  if (userId) userArgs.where = { id: userId };

  const user = await User.findAll(userArgs);

  res.json({
    user,
  });
  return;
});

export default route;
