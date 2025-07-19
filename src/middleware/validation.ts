import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { AppError } from './errorHandler';

export const validateFeedback = (req: Request, res: Response, next: NextFunction): void => {
  const schema = Joi.object({
    name: Joi.string()
      .trim()
      .min(1)
      .max(100)
      .required()
      .messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 1 character long',
        'string.max': 'Name must be less than 100 characters',
        'any.required': 'Name is required',
      }),
    message: Joi.string()
      .trim()
      .min(1)
      .max(1000)
      .required()
      .messages({
        'string.empty': 'Message is required',
        'string.min': 'Message must be at least 1 character long',
        'string.max': 'Message must be less than 1000 characters',
        'any.required': 'Message is required',
      }),
  });

  const { error } = schema.validate(req.body);
  
  if (error) {
    const errorMessage = error.details.map(detail => detail.message).join(', ');
    const validationError = new Error(errorMessage) as AppError;
    validationError.statusCode = 400;
    return next(validationError);
  }

  next();
}; 