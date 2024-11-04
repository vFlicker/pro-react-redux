import { updateOrder } from '../helpers/update-order';

export const itemRemoved = ({ items }, { payload: book }) => {
  updateOrder(items, book, -1);
};
