import { updateOrder } from '../helpers/update-order';

export const itemAdded = ({ items }, { payload: book }) => {
  updateOrder(items, book, 1);
};
