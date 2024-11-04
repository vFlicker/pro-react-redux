export const fetchBooksFulfilled = (state, action) => {
  state.books = action.payload;
  state.loading = false;
  state.error = null;
};
