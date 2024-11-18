import { NavLink } from 'react-router-dom';

import { navItems } from './config';
import classes from './EventsNavigation.module.css';

export function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          {navItems.map((navItem) => (
            <li key={navItem.to}>
              <NavLink
                to={navItem.to}
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end={navItem.end}
              >
                {navItem.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
