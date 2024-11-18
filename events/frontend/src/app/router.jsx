import { createBrowserRouter } from 'react-router-dom';

import { action as manipulateEventAction } from '../components/event/EventForm';
import { ErrorPage } from '../pages/Error';
import { EditEventPage } from '../pages/event/EditEvent';
import {
  action as deleteEventAction,
  EventDetailPage,
  loader as eventDetailLoader,
} from '../pages/event/EventDetail';
import { EventsPage, loader as eventsLoader } from '../pages/event/Events';
import { EventsRootLayout } from '../pages/event/EventsRoot';
import { NewEventPage } from '../pages/event/NewEvent';
import { HomePage } from '../pages/Home';
import {
  action as newsletterAction,
  NewsletterPage,
} from '../pages/Newsletter';
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
        element: <EventsRootLayout />,
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
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
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
