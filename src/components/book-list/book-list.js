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

// const {
//   bookstoreService,
//   booksLoaded,
//   booksRequested,
//   booksError
// } = this.props;
//
// booksRequested();
//
// bookstoreService.getBooks()
//   .then((data) => booksLoaded(data))
//   .catch((err) => booksError(err));

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: () => {
      dispatch(booksRequested());

      bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
    }
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(bookLoaded(newBooks))
//     }
//   };
// };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
