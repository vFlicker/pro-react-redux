export const bookAddedToCart = (id) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: id,
  };
};

export const bookRemovedFormCart = (id) => {
  return {
    type: 'BOOK_REMOVED_FORM_CART',
    payload: id,
  };
};

export const allBookRemovedFormCart = (id) => {
  return {
    type: 'ALL_BOOK_REMOVED_FORM_CART',
    payload: id,
  };
};
