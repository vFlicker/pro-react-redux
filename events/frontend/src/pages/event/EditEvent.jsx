import { useRouteLoaderData } from 'react-router-dom';

import { EventForm } from '../../components/event/EventForm';

export function EditEventPage() {
  const data = useRouteLoaderData('event-detail');

  return <EventForm method="patch" event={data.event} />;
}
