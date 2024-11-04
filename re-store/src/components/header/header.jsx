import './header.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../constants';
import { selectCartItems, selectOrderTotal } from '../../store';

export function Header() {
  const cartItems = useSelector(selectCartItems);
  const orderTotal = useSelector(selectOrderTotal);

  return (
    <header className="header">
      <div className="container  header__container">
        <Link to={AppRoute.HOME}>
          <h1 className="header__logo">ReStore</h1>
        </Link>
        <Link to={AppRoute.CART}>
          <div className="shopping-cart">
            <i className="shopping-cart__icon fa fa-shopping-cart" />
            {cartItems.length} items (${orderTotal})
          </div>
        </Link>
      </div>
    </header>
  );
}
