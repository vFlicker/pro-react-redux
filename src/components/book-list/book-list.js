import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BookItem from '../book-item';
import Spinner from '../spiner';
import ErrorIndicator from '../error-indicator';
import withBookstoreService from '../hoc';
import { fetchBooks } from '../../actions';
import './book-list.css';

const BookList = ({ books }) => {
  return (
    <ul className="books-list">
      {
        books.map(({ id, ...book }) => {
          return (
            <li key={id}>
              <BookItem book={book} />
            </li>
          );
        })
      }
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator error={error} />
    }

    return <BookList books={books} />
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
