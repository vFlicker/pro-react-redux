import { redirect } from 'react-router-dom';

import { getAuthToken } from '../../utils/token';

export const checkAuthLoader = () => {
  const token = getAuthToken();
  if (!token) return redirect('/auth/sign-in');
};
