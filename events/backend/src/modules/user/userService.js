import { SALT } from '../../constants.js';
import { createSHA256 } from '../../helpers/index.js';
import { createJSONToken } from '../../helpers/index.js';
import { userRepository } from './userRepository.js';

const create = async (dto) => {
  const { email, password } = dto;

  const passwordHash = await createSHA256(password, SALT);
  await userRepository.add({ ...dto, password: passwordHash });

  const authToken = createJSONToken(email);
  return authToken;
};

export const userService = {
  create,
};
