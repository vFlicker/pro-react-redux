import { defer, json } from 'react-router-dom';

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      },
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
};

export function eventsLoader() {
  return defer({
    events: loadEvents(),
  });
}
