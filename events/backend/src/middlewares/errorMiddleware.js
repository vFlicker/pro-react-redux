import { StatusCode } from '../constants.js';

export const errorMiddleware = (error, _req, res, _next) => {
  const status = error.status || StatusCode.INTERNAL_SERVER_ERROR;
  const message = error.message || 'Something went wrong.';
  res.status(status).json({ message: message });
};
