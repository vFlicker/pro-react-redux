import { createBrowserRouter } from 'react-router-dom';

import {
  createEventAction,
  deleteEventAction,
  eventDetailLoader,
  eventsLoader,
  newsletterAction,
  updateEventAction,
} from '../api-actions';
import { ErrorPage } from '../pages/error';
import { EditEventPage } from '../pages/event/editEvent';
import { EventDetailPage } from '../pages/event/eventDetail';
import { EventsPage } from '../pages/event/events';
import { EventsLayout } from '../pages/event/eventsLayout';
import { NewEventPage } from '../pages/event/newEvent';
import { HomePage } from '../pages/home';
import { MainLayout } from '../pages/mainLayout';
import { NewsletterPage } from '../pages/newsletter';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
                action: updateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: createEventAction,
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
