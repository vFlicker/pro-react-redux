import { createContext } from 'react';

const {
  Provider: BookstoreServiceProvider,
  Consumer: BookstoreServiceConsumer
} = createContext(null);

export {
  BookstoreServiceProvider,
  BookstoreServiceConsumer
};
