import jsonwebtoken from 'jsonwebtoken';

import { SECRET } from '../constants.js';

export const createJSONToken = (email) => {
  return jsonwebtoken.sign({ email }, SECRET, { expiresIn: '1h' });
};
