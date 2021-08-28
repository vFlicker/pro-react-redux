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
        total: book.price,
      };

      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex > -1) {
        const oldItem = state.cartItems[itemIndex];
        const total = oldItem.total / oldItem.count;
        const newItem = {
          ...oldItem,
          count: oldItem.count + 1,
          total: oldItem.total + total,
        };

        return {
          ...state,
          cartItems: [
            ...state.cartItems.slice(0, itemIndex),
            newItem,
            ...state.cartItems.slice(itemIndex + 1),
          ],
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };

    default:
      return state;
  }
};

export default reducer;
