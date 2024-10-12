import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  bookRemovedFormCart,
  bookAddedToCart,
  allBookRemovedFormCart,
} from '../../store';

import './shopping-cart-table.css';

export const ShoppingCartTable = () => {
  const { cartItems, orderTotal } = useSelector((state) => state.shoppingCart);

  return (
    <div className="shopping-cart-table">
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
            <Row item={item} index={index} />
          ))}
        </tbody>
      </table>

      <div className="total">
        Total: ${orderTotal}
      </div>
    </div>
  );
};

const Row = ({ item, index }) => {
  const { id, title, count, total } = item;

  const dispatch = useDispatch();

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button
          className="btn btn-outline-warning btn-sm"
          onClick={() => dispatch(bookRemovedFormCart(id))}>
          <i className="fa fa-minus-circle" />
        </button>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => dispatch(bookAddedToCart(id))}>
          <i className="fa fa-plus-circle" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => dispatch(allBookRemovedFormCart(id))}>
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </tr>
  );
}
