import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { bookAddedToCart, fetchBooks } from '../../store';
import { BookItem } from '../book-item';
import { Spinner } from '../spiner';
import { ErrorIndicator } from '../error-indicator';

import './book-list.css';

const BookList = ({ books, onAddedToCart }) => (
  <ul className="books-list">
    {books.map(({ id, ...book }) => (
      <li key={id}>
        <BookItem
          book={book}
          onAddedToCart={() => onAddedToCart(id)}
        />
      </li>
    ))}
  </ul>
);

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) return <Spinner />;

    if (error) return <ErrorIndicator />;

    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = ({ bookList }) => {
  const { books, loading, error } = bookList;
  return { books, loading, error};
};

const mapDispatchToProps = {
  fetchBooks,
  onAddedToCart: bookAddedToCart,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
