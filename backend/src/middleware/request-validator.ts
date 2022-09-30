import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { RequestValidationError } from '../errors/request-validation-error';
import RequestValidators from '../interfaces/RequestValidators';

function validate(validator: RequestValidators) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (validator.body) {
        req.body = await validator.body.parseAsync(req.body);
      }
      if (validator.params) {
        req.params = await validator.params.parseAsync(req.params);
      }
      if (validator.query) {
        req.query = await validator.query.parseAsync(req.query);
      }
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        throw new RequestValidationError(err.issues);
      }
    }
  };
}

export default validate;
