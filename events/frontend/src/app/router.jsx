import { createBrowserRouter } from 'react-router-dom';

import { createOrUpdateEventAction } from '../components/event/EventForm';
import { ErrorPage } from '../pages/Error';
import { EditEventPage } from '../pages/event/EditEvent';
import {
  deleteEventAction,
  eventDetailLoader,
  EventDetailPage,
} from '../pages/event/EventDetail';
import { eventsLoader, EventsPage } from '../pages/event/Events';
import { EventsLayout } from '../pages/event/EventsLayout';
import { NewEventPage } from '../pages/event/NewEvent';
import { HomePage } from '../pages/Home';
import { newsletterAction, NewsletterPage } from '../pages/Newsletter';
import { RootLayout } from '../pages/Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: createOrUpdateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: createOrUpdateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
