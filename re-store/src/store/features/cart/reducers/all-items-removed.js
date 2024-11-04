import { updateOrder } from '../helpers/update-order';

export const allItemsRemoved = ({ items }, { payload: book }) => {
  const { count } = items.find(({ id }) => id === book.id);
  updateOrder(items, book, -count);
};
