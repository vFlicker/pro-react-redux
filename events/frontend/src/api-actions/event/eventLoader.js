import { json } from 'react-router-dom';

import { StatusCode } from '../../constants';
import { apiService } from '../../services/apiService';

export const eventLoader = async (id) => {
  const response = await apiService.getEvent(id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      { status: StatusCode.INTERNAL_SERVER_ERROR },
    );
  }

  const event = await response.json();
  return event;
};
