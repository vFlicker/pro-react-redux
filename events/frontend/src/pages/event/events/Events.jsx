import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { EventsList } from '../../../components/event/eventsList';

export function EventsPage() {
  const events = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}
