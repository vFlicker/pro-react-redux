import './cart-table.css';

import { useSelector } from 'react-redux';

import { selectCartItems, selectOrderTotal } from '../../store';
import { Row } from './row';

export function CartTable() {
  const cartItems = useSelector(selectCartItems);
  const orderTotal = useSelector(selectOrderTotal);

  return (
    <div className="cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item, index) => (
            <Row key={item.id} index={index} {...item} />
          ))}
        </tbody>
      </table>

      <div className="total">Total: ${orderTotal}</div>
    </div>
  );
}
