import './header.css';

import { Link } from 'react-router-dom';

export function Header({ numItems, total }) {
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
}
