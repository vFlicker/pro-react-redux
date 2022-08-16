import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'SHOPPING_CART',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const data = await apiService.getBooks();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

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
  if (item.count === 0) return cartItems.splice(index, 1);

  if (index === -1) return cartItems.push(item);

  return cartItems.splice(index, 1, item);
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }) => id === bookId);
  const index = cartItems.findIndex((item) => item.id === bookId);
  const oldItem = cartItems[index];

  const newItem = updateCartItem(book, oldItem, quantity);

  updateCartItems(cartItems, newItem, index);
};

const initialState = {
  books: [],
  cartItems: [],
  orderTotal: 0,
  loading: true,
  error: null,
}

const slice = createSlice({
  name: 'shopping_cart',
  initialState,
  reducers: {
    bookAddedToCart: (state, action) => {
      updateOrder(state, action.payload, 1)
    },
    bookRemovedFormCart: (state, action) => {
      updateOrder(state, action.payload, -1);
    },
    allBookRemovedFormCart: (state, action) => {
      const item = state.cartItems.find(({ id }) => id === action.payload);
      updateOrder(state, action.payload, -item.count);
    },
  },
  extraReducers: ((builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }),
});

export const { bookAddedToCart, bookRemovedFormCart, allBookRemovedFormCart } = slice.actions;
export default slice;
