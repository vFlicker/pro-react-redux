import { json, redirect } from 'react-router-dom';

import { StatusCode } from '../../constants';
import { apiService } from '../../services/apiService';

export const deleteEventAction = async ({ params }) => {
  const response = await apiService.deleteEvent(params.eventId);

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      { status: StatusCode.INTERNAL_SERVER_ERROR },
    );
  }

  return redirect('/events');
};
