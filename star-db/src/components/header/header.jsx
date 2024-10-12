import './header.css';

import { Link } from 'react-router-dom';

import { navigationItems } from './navigationItems';

export function Header({ onServiceChange }) {
  return (
    <div className="header d-flex">
      <h3>
        <Link to="/">Star DB</Link>
      </h3>
      <ul className="d-flex">
        {navigationItems.map(({ link, text }) => (
          <li key={link}>
            <Link to={link}>{text}</Link>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary btn-sm" onClick={onServiceChange}>
        Change Service
      </button>
    </div>
  );
}
