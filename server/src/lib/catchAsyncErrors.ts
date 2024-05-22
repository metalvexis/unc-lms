import { RequestHandler, Request, Response, NextFunction } from 'express';

export function catchAsyncErrors(middleware: RequestHandler) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
