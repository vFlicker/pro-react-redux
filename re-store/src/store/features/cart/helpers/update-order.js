const updateCartItem = (book, oldItem = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = oldItem;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) return cartItems.splice(index, 1);
  if (index === -1) return cartItems.push(item);
  return cartItems.splice(index, 1, item);
};

export const updateOrder = (items, book, quantity) => {
  const itemIndex = items.findIndex((item) => item.id === book.id);
  const oldItem = items[itemIndex];
  const newItem = updateCartItem(book, oldItem, quantity);
  updateCartItems(items, newItem, itemIndex);
};
