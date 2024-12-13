import { createBrowserRouter } from 'react-router-dom';

import {
  checkAuthLoader,
  createEventAction,
  deleteEventAction,
  eventDetailLoader,
  eventsLoader,
  logoutAction,
  newsletterAction,
  signInAction,
  signUpAction,
  tokenLoader,
  updateEventAction,
} from '../api-actions';
import { SignInPage } from '../pages/auth/signIn';
import { SignUpPage } from '../pages/auth/signUp';
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
    id: 'root',
    loader: tokenLoader,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'auth',
        children: [
          {
            path: 'sign-in',
            element: <SignInPage />,
            action: signInAction,
          },
          {
            path: 'sign-up',
            element: <SignUpPage />,
            action: signUpAction,
          },
          {
            path: 'logout',
            action: logoutAction,
          },
        ],
      },
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
                loader: checkAuthLoader,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: createEventAction,
            loader: checkAuthLoader,
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
