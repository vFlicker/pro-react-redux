const initialState = {
  books: [],
  cartItems: [],
  orderTotal: 220,
  loading: true,
  error: null,
};

const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1),
    ];
  }

  if (index === -1) {
    return [...cartItems, item];
  }

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1),
  ];
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }) => id === bookId);
  const index = cartItems.findIndex((item) => item.id === bookId);
  const oldItem = cartItems[index];

  const newItem = updateCartItem(book, oldItem, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, index)
  };

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };

    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVED_FORM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOK_REMOVED_FORM_CART':
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state;
  }
};

export default reducer;
