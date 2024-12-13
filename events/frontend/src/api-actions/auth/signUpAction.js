import { json, redirect } from 'react-router-dom';

import { StatusCode } from '../../constants';
import { apiService } from '../../services/apiService';
import { setToken } from '../../utils/token';

export const signUpAction = async ({ request }) => {
  const data = await request.formData();
  const authData = Object.fromEntries(data.entries());
  const response = await apiService.signUp(authData);

  if (
    response.status === StatusCode.UNPROCESSABLE_ENTITY ||
    response.status === StatusCode.CONFLICT
  ) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: 'Could not register user.' },
      { status: StatusCode.INTERNAL_SERVER_ERROR },
    );
  }

  const { token } = await response.json();
  setToken(token);

  return redirect('/');
};
