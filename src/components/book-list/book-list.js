import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BookItem from '../book-item';
import Spinner from '../spiner';
import ErrorIndicator from '../error-indicator';
import withBookstoreService from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError
    } = this.props;

    booksRequested();

    bookstoreService.getBooks()
      .then((data) => booksLoaded(data))
      .catch((err) => booksError(err));
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator error={error} />
    }

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
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
