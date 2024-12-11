import { SALT } from '../../constants.js';
import { AuthenticationError, createSHA256 } from '../../helpers/index.js';
import { createJSONToken } from '../../helpers/index.js';
import { userRepository } from './userRepository.js';

const verify = async (dto) => {
  const { email, password } = dto;

  const foundUser = await userRepository.findByEmail(email);
  if (!foundUser) {
    throw new AuthenticationError();
  }

  const isPasswordValid = foundUser.password === createSHA256(password, SALT);
  if (!isPasswordValid) {
    throw new AuthenticationError();
  }

  return foundUser;
};

const authenticate = (email) => {
  const authToken = createJSONToken(email);
  return authToken;
};

export const authService = {
  verify,
  authenticate,
};
