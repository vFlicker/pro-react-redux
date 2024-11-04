import './book-item.css';

import { useDispatch } from 'react-redux';

import { cartAction } from '../../store';

export function BookItem({ book }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cartAction.itemAdded(book));
  };

  return (
    <div className="book-item">
      <div className="book-cover">
        <img src={book.coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <a href="/" className="book-title">
          {book.title}
        </a>
        <div className="book-author">{book.author}</div>
        <div className="book-price">${book.price}</div>
        <button className="btn btn-info add-to-cart" onClick={handleClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
