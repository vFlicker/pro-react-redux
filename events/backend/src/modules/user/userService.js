import { SALT } from '../../constants.js';
import { createSHA256 } from '../../helpers/index.js';
import { authService } from './authService.js';
import { userRepository } from './userRepository.js';

const create = async (dto) => {
  const { email, password } = dto;

  const passwordHash = await createSHA256(password, SALT);
  await userRepository.add({ ...dto, password: passwordHash });

  return authService.authenticate(email);
};

export const userService = {
  create,
};
