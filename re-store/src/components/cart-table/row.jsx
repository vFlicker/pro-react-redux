import { useDispatch, useSelector } from 'react-redux';

import { cartAction, selectBookById } from '../../store/';

export function Row({ id, title, count, total, index }) {
  const dispatch = useDispatch();

  const book = useSelector((state) => selectBookById(state, id));

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{count}</td>
      <td>${total}</td>
      <td>
        <button
          className="btn btn-outline-warning btn-sm"
          onClick={() => dispatch(cartAction.itemRemoved(book))}
        >
          <i className="fa fa-minus-circle" />
        </button>
        <button
          className="btn btn-outline-success btn-sm"
          onClick={() => dispatch(cartAction.itemAdded(book))}
        >
          <i className="fa fa-plus-circle" />
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => dispatch(cartAction.allItemsRemoved(book))}
        >
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </tr>
  );
}
