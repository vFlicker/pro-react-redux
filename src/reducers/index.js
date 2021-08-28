const initialState = {
  books: [],
  cartItems: [
    {
      id: 1,
      title: 'Book 1',
      count: 3,
      price: 150,
    },
    {
      id: 2,
      title: 'Book 2',
      count: 2,
      price: 70,
    },
  ],
  orderTotal: 220,
  loading: true,
  error: null,
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

      const newItem = {
        id: book.id,
        title: book.title,
        count: 1,
        price: book.price,
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };

    default:
      return state;
  }
};

export default reducer;
