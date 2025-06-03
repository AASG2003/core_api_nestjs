import * as Joi from 'joi';

export const validationSchema = Joi.object({
  APP_PORT: Joi.number().default(8000),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_DB: Joi.string().required(),
});
