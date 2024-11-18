import { json } from 'react-router-dom';

import { StatusCode } from '../../constants';
import { apiService } from '../../services/apiService';

export const eventsLoader = async () => {
  const response = await apiService.getEvents();

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events.' },
      { status: StatusCode.INTERNAL_SERVER_ERROR },
    );
  }

  const resData = await response.json();
  return resData.events;
};
