import { updateBookList } from './book-list';
import { updateShoppingCart } from './shopping-cart';

export const rootReducer = (state, action) => ({
  bookList: updateBookList(state, action),
  shoppingCart: updateShoppingCart(state, action),
});
