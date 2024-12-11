import * as crypto from 'node:crypto';

export const createSHA256 = (line, salt) => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};
