/* eslint-disable @typescript-eslint/no-namespace */
// Extend ExpressJs Objects 
// https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5
declare global {
  namespace Express {
    interface Request {
      auth?: AuthCredentials
      rbacReq?: RbacReq
    }
  }
}

export enum ENUM_PERIOD {
  'SUMMER' = 0,
  'FIRST' = 1,
  'SECOND' = 2,
}

export enum ROLE {
  FACULTY = 'FACULTY',
  DEAN = 'DEAN',
  ASSTDEAN = 'ASSTDEAN',
  PROGRAMHEAD = 'PROGRAMHEAD',
}

export type AuthCredentials = {
  username: string;
  password: string;
  department_code: string;
}

export type RbacReq = {
  faculty_id: number;
  dept_id: number;
  roles: string[];
}