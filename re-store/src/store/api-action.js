import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
  'book/fetchBooks',
  async (_, { extra: apiService, rejectWithValue }) => {
    try {
      const data = await apiService.getBooks();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
