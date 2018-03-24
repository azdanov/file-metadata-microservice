import { NextFunction, Request, Response } from 'express';

export interface Error {
  status?: number;
  message?: string;
  code?: string;
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const code = err.status || 500;
  const message =
    err.code === 'LIMIT_FILE_SIZE' ? 'File size is too large.' : 'Unknown error.';
  res.status(code);
  res.render('error', {
    message,
    error: err,
    title: `${code} | File Metadata Microservice`,
  });
  next();
};
