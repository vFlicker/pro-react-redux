import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

export const withBookstoreService = () => (Wrapper) => {
  return (props) => (
    <BookstoreServiceConsumer>
      {(bookstoreService) => (
        <Wrapper
          {...props}
          bookstoreService={bookstoreService}
        />
      )}
    </BookstoreServiceConsumer>
  );
};
