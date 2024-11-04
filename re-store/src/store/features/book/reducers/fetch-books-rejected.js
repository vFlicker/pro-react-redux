export const fetchBooksRejected = (state, action) => {
  state.products = [];
  state.loading = false;
  state.error = action.payload ?? 'Unknown error';
};
