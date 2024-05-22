import { pbkdf2 } from 'crypto';
import { getHash, checkHash } from '@metalvexis/jputil'

import { User } from '../models/User.model';
import { Faculty } from '../models/Faculty.model';
import { Department } from '../models/Department.model';

import { ROLE } from '../types';
import type { RbacReq } from '../types';
import type { WhereOptions } from 'sequelize';

export async function hashPassword(password: string) {
  if (!process.env.PASSWORD_SALT) throw new Error('PASSWORD_SALT undefined');
  return getHash(password, process.env.PASSWORD_SALT);
}

export async function validatePassword(
  attemptPassword: string,
  storedPassword: string
) {
  if (!process.env.PASSWORD_SALT) throw new Error('PASSWORD_SALT undefined');
  return checkHash(attemptPassword, storedPassword, process.env.PASSWORD_SALT);
}

export async function assertUser(
  username: string,
  password: string
): Promise<User | null> {
  const user = await User.findOne({
    where: {
      username,
    },
    include: [
      {
        model: Faculty,
        required: true,
      },
    ]
  });

  if (!user) return null;

  console.log('user', user);

  const isMatchPw = await validatePassword(password, user?.password);

  if (!isMatchPw) return null;

  return user;
}

export async function assertRole(
  username: string,
  allowedRoles: ROLE[],
  department_code?: string
): Promise<RbacReq | null> {
  const deptJoinArg: WhereOptions = {
    model: Department,
    required: false
  }

  if (department_code && department_code !== '') {
    deptJoinArg.where = { department_code }
  }
  
  const faculty = await Faculty.findOne({
    where: {
      id: username,
    },
    include: [
      {
        ...deptJoinArg,
        as: 'asDean'
      },
      {
        ...deptJoinArg,
        as: 'asAssistantDean'
      },
      {
        ...deptJoinArg,
        as: 'asProgramHead'
      },
    ],
  });

  if (!faculty) return null;

  console.log('Faculty', faculty);
  
  const thisFacultyRoles: ROLE[] = [];
  
  if (faculty.asDean.length) thisFacultyRoles.push(ROLE.DEAN)
  if (faculty.asAssistantDean.length) thisFacultyRoles.push(ROLE.ASSTDEAN)
  if (faculty.asProgramHead.length) thisFacultyRoles.push(ROLE.PROGRAMHEAD)

  const isAllowedRoles = allowedRoles.some((r) => thisFacultyRoles.includes(r));
  
  if (!isAllowedRoles) return null;

  return {
    faculty_id: faculty.id,
    dept_id: 1,
    roles: thisFacultyRoles,
  };
}
