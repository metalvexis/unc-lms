/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Request, Response, NextFunction } from 'express';
import { User } from '../models/User.model';
import type { AuthCredentials } from '../types';
import { assertUser } from '../lib';

export async function authorizer(
  username: string,
  password: string
): Promise<User | null> {
  const user = await assertUser(username, password);
  return user;
}

export async function parseBasicAuth(
  basicAuth: string
): Promise<AuthCredentials | null> {
  const creds = Buffer.from(basicAuth, 'base64').toString('utf-8').split(':');
  const authUser = await authorizer(creds[0], creds[1]);

  if (authUser === null) return null;

  return {
    username: creds[0],
    password: creds[1],
    department_code: authUser.faculty.mother_dept
  }
}

export async function mwValidateAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) return res.sendStatus(403);

  try {
    const basicAuth = req.headers.authorization.split(' ')[1];
    if (!basicAuth) return res.sendStatus(403);
    const parsedAuth = await parseBasicAuth(basicAuth);
    if (!parsedAuth) return res.sendStatus(403);
    req.auth = parsedAuth;
  } catch (error) {
    res.sendStatus(403);
    throw error;
  }
  next();
}
