import { getAuthToken } from '../../utils/token';

export const tokenLoader = () => {
  const token = getAuthToken();
  return token;
};
