const updateCartItem = (book, item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price
  };
};

const updateCartItems = (cartItems, item, index) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, index),
      ...cartItems.slice(index + 1),
    ];
  }

  if (index === -1) {
    return [...cartItems, item];
  }

  return [
    ...cartItems.slice(0, index),
    item,
    ...cartItems.slice(index + 1),
  ];
};

const updateOrder = (state, bookId, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems } } = state;
  const book = books.find(({ id }) => id === bookId);
  const index = cartItems.findIndex((item) => item.id === bookId);
  const oldItem = cartItems[index];

  const newItem = updateCartItem(book, oldItem, quantity);

  return {
    cartItems: updateCartItems(cartItems, newItem, index),
    orderTotal: 0,
  };

};

export const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
    };
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);

    case 'BOOK_REMOVED_FORM_CART':
      return updateOrder(state, action.payload, -1);

    case 'ALL_BOOK_REMOVED_FORM_CART':
      const item = state.shoppingCart.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);

    default:
      return state.shoppingCart;
  }
}
