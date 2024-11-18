import { json, redirect } from 'react-router-dom';

import { StatusCode } from '../../constants';
import { apiService } from '../../services/apiService';

export const createEventAction = async ({ request }) => {
  const data = await request.formData();
  const event = Object.fromEntries(data.entries());
  const response = await apiService.createEvent(event);

  if (response.status === StatusCode.UNPROCESSABLE_ENTITY) {
    return response;
  }

  if (!response.ok) {
    throw json(
      { message: 'Could not save event.' },
      { status: StatusCode.INTERNAL_SERVER_ERROR },
    );
  }

  return redirect('/events');
};
