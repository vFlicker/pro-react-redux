import { Link, useNavigate, useSubmit } from 'react-router-dom';

import { getAuthToken } from '../../../utils/token';
import classes from './EventItem.module.css';

export function EventItem({ event }) {
  const navigate = useNavigate();
  const submit = useSubmit();

  const startDeleteHandler = () => {
    const token = getAuthToken();

    if (!token) {
      navigate('/auth/sign-in');
      return;
    }

    const proceed = window.confirm('Are you sure?');
    if (proceed) submit(null, { method: 'delete' });
  };

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}
