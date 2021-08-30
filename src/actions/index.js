const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST',
  };
};

const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  };
};

const fetchBooks = (bookstoreService) => () => (dispatch) => {
  dispatch(booksRequested());

  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((err) => dispatch(booksError(err)));
};

const bookAddedToCart = (id) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: id,
  };
};

const bookRemovedFormCart = (id) => {
  return {
    type: 'BOOK_REMOVED_FORM_CART',
    payload: id,
  };
};

const allBookRemovedFormCart = (id) => {
  return {
    type: 'ALL_BOOK_REMOVED_FORM_CART',
    payload: id,
  };
};

export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFormCart,
  allBookRemovedFormCart
};
