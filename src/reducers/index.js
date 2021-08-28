const initialState = {
  books: [],
  cartItems: [
    // {
    //   id: 40,
    //   title: 'Book 1',
    //   count: 3,
    //   total: 150,
    // },
    // {
    //   id: 41,
    //   title: 'Book 2',
    //   count: 2,
    //   total: 70,
    // },
  ],
  orderTotal: 220,
  loading: true,
  error: null,
};

const updateCartItem = (book, oldItem = {}) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = oldItem;

  return {
    id,
    title,
    count: count + 1,
    total: total + book.price
  };
};

const updateCartItems = (cartItems, newItem, index) => {
  if (index === -1) {
    return [...cartItems, newItem];
  }

  return [
    ...cartItems.slice(0, index),
    newItem,
    ...cartItems.slice(index + 1),
  ];
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
      const id = action.payload;
      const book = state.books.find((book) => book.id === id);
      const index = state.cartItems.findIndex((item) => item.id === id);
      const oldItem = state.cartItems[index];

      const newItem = updateCartItem(book, oldItem);

      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, index)
      };

    default:
      return state;
  }
};

export default reducer;
