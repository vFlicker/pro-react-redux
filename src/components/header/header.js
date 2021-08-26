import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ numItems, total }) => {
  return (
    <header className="header">
      <div className="container  header__container">
        <Link to="/">
          <h1 className="header__logo">ReStore</h1>
        </Link>
        <Link to="/cart">
          <div className="shopping-cart">
            <i className="shopping-cart__icon fa fa-shopping-cart" />
            {numItems} items (${total})
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
