import { Outlet } from 'react-router-dom';

import { EventsNavigation } from '../../../components/event/eventsNavigation';

export function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
