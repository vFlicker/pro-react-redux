import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BookItem from '../book-item';
import withBookstoreService from '../hoc';
import { booksLoaded, booksRequested } from '../../actions';
import './book-list.css';
import Spinner from '../spiner';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;

    booksRequested();

    bookstoreService.getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />
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

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
