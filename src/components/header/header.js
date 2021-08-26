import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container  header__container">
        <h3>ReStore</h3>
        <ul className="header__list">
          <li className="header__link">
            <Link to="/">Home</Link>
          </li>
          <li className="header__link">
            <Link to="/card/">Card</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
