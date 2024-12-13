import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';

import { NewsletterSignup } from '../newsletterSignup';
import { navItems } from './config';
import classes from './MainNavigation.module.css';

export function MainNavigation() {
  const token = useRouteLoaderData('root');

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {navItems.map((navItem) => (
            <li key={navItem.to}>
              <NavLink
                to={navItem.to}
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
                end={navItem.end}
              >
                {navItem.label}
              </NavLink>
            </li>
          ))}
          {!token && (
            <li>
              <NavLink
                to="/auth/sing-in"
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
              >
                Login
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="/auth/logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}
