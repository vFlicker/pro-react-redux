import { updateBookList } from './book-list';
import { updateShoppingCart } from './shopping-cart';

export const reducer = (state, action) => ({
  bookList: updateBookList(state, action),
  shoppingCart: updateShoppingCart(state, action),
});
