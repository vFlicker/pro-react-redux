import React from 'react';
import { connect } from 'react-redux';

import {
  bookAddedToCart,
  bookRemovedFormCart,
  allBookRemovedFormCart,
} from '../../store';

import './shopping-cart-table.css';

const ShoppingCartTable = ({
  items,
  total,
  ...actions
}) => {
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
          {items.map((item, index) => (
            <Row item={item} index={index} {...actions} />
          ))}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const Row = ({ item, index, onDecrease, onIncrease, onDelete }) => {
  const { id, title, count, total } = item;

  return (
    <tr key={id}>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button
          className="btn btn-outline-warning btn-sm"
          onClick={() => onDecrease(id)}>
          <i className="fa fa-minus-circle" />
        </button>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => onIncrease(id)}>
          <i className="fa fa-plus-circle" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => onDelete(id)}>
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </tr>
  );
}

const mapStateToProps = ({ shoppingCart }) => {
  const { cartItems, orderTotal } = shoppingCart;

  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = {
  onDecrease: bookRemovedFormCart,
  onIncrease: bookAddedToCart,
  onDelete: allBookRemovedFormCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartTable);
