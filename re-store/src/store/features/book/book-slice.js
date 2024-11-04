import { createSlice } from '@reduxjs/toolkit';

import { fetchBooks } from '../../api-action';
import { fetchBooksFulfilled } from './reducers/fetch-books-fulfilled';
import { fetchBooksPending } from './reducers/fetch-books-pending';
import { fetchBooksRejected } from './reducers/fetch-books-rejected';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, fetchBooksPending)
      .addCase(fetchBooks.fulfilled, fetchBooksFulfilled)
      .addCase(fetchBooks.rejected, fetchBooksRejected);
  },
});

export const bookReducer = bookSlice.reducer;
