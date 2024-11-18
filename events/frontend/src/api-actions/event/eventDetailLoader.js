import { defer } from 'react-router-dom';

import { eventLoader } from './eventLoader';
import { eventsLoader } from './eventsLoader';

export const eventDetailLoader = async ({ params }) => {
  const id = params.eventId;

  return defer({
    event: await eventLoader(id),
    events: eventsLoader(),
  });
};
