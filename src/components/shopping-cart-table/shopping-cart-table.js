import React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.css';

const ShoppingCartTable = (props) => {
  const {
    items,
    total,
    onDecrease,
    onIncrease,
    onDelete
  } = props;

  const renderRow = (item, index) => {
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
          {items.map(renderRow)}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal,
  };
};

const mapDispatchToProps = () => {
  return {
    onDecrease: (id) => console.log(`onDecrease: ${id}`),
    onIncrease: (id) => console.log(`onIncrease: ${id}`),
    onDelete: (id) => console.log(`onDelete: ${id}`),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
