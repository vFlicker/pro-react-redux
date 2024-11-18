import { NavLink } from 'react-router-dom';

import { NewsletterSignup } from '../newsletterSignup';
import { navItems } from './config';
import classes from './MainNavigation.module.css';

export function MainNavigation() {
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
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}
