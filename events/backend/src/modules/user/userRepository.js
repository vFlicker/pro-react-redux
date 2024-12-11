import { v4 as generateId } from 'uuid';

import { readData, writeData } from '../../helpers/index.js';

const add = async (user) => {
  const createdUser = { id: generateId(), ...user };

  const storedData = await readData();
  storedData.users.push(createdUser);
  await writeData(storedData);

  return createdUser;
};

const findByEmail = async (email) => {
  const { users } = await readData();

  const foundUser = users.find((user) => user.email === email);
  if (!foundUser) return null;

  return foundUser;
};

export const userRepository = {
  add,
  findByEmail,
};
