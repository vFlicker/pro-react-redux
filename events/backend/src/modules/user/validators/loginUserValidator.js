import { isValidEmail, isValidText } from '../../../helpers/index.js';

export const loginUserValidator = (data) => {
  const errors = {};

  if (!isValidText(data.email) || !isValidEmail(data.email)) {
    errors.email = 'Invalid email.';
  }

  if (!isValidText(data.password)) {
    errors.description = 'Invalid password.';
  }

  return errors;
};
