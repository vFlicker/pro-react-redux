import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import BookItem from '../book-item';
import withBookstoreService from '../hoc';
import { booksLoaded } from '../../actions';
import './book-list.css';

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    const data = bookstoreService.getBooks();

    booksLoaded(data);
  }

  render() {
    const { books } = this.props;

    return (
      <ul>
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

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded,
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     booksLoaded,
//   }, dispatch);
//
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(bookLoaded(newBooks))
//     }
//   };
//
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch({
//         type: 'BOOKS_LOADED',
//         payload: newBooks,
//       })
//     }
//   };
// };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(
//   connect(mapStateToProps, mapDispatchToProps)(BookList)
// );
