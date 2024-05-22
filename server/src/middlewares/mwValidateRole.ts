/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Request, Response, NextFunction, RequestHandler } from 'express';
import { assertRole } from '../lib';
import { ROLE } from '../types';

export function mwValidateRole(
  roles: ROLE[]
): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.auth) return res.sendStatus(403);

    const rbacReq = await assertRole(
      req.auth.username,
      roles,
      req.auth.department_code
    );

    if (!rbacReq) return res.sendStatus(403);

    req.rbacReq = rbacReq;

    next();
  };
}
