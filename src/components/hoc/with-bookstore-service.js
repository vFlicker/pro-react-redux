import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = (mapMethodsToProps) => (Wrapper) => {
  return (props) => (
    <BookstoreServiceConsumer>
      {
        (bookstoreService) => {
          const bookstoreServiceProps = mapMethodsToProps(bookstoreService);

          return <Wrapper {...props} {...bookstoreServiceProps} />
        }
      }
    </BookstoreServiceConsumer>
  );
};

export default withBookstoreService;
