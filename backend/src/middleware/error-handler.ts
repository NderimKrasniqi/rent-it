import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  const statusCode = 500;
  return res.status(statusCode).send({
    errors: [{ message: 'Something went wrong' }],
  });
};

export { errorHandler };
