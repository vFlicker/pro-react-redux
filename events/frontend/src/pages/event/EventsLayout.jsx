import { Outlet } from 'react-router-dom';

import { EventsNavigation } from '../../components/event/EventsNavigation';

export function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
