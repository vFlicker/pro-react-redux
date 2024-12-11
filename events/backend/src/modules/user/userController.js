import { StatusCode } from '../../constants.js';
import { wait } from '../../helpers/index.js';
import { userRepository } from './userRepository.js';
import { userService } from './userService.js';
import { createUserValidator } from './validators/createUserValidator.js';

const create = async (req, res) => {
  await wait(2000);
  const user = req.body;

  const errors = createUserValidator(user);
  if (Object.keys(errors).length > 0) {
    const message = 'Registration failed due to validation errors.';
    res.status(StatusCode.UNPROCESSABLE_ENTITY).json({ message, errors });
    return;
  }

  const foundUser = await userRepository.findByEmail(user.email);
  if (foundUser) {
    const message = `User with email ${user.email} already exists.`;
    res.status(StatusCode.CONFLICT).json({ message });
    return;
  }

  const token = await userService.create(user);
  res.status(StatusCode.CREATED).json({ token });
};

const login = () => {};

export const userController = {
  create,
  login,
};
