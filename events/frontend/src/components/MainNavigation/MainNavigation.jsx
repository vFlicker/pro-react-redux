import { NavLink } from 'react-router-dom';

import { NewsletterSignup } from '../newsletterSignup';
import { navItems } from './config';
import classes from './MainNavigation.module.css';

export function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
                end={item.end}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}
