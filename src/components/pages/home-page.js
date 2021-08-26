import React from 'react';
import BookList from '../book-list';
import withBookstoreService from '../hoc';

const HomePage = ({ getBooks }) => {
  return (
    <div className="container">
      <BookList books={getBooks()} />
    </div>
  );
};

const mapMethodsToProps = (bookstoreService) => {
  return {
    getBooks: bookstoreService.getBooks,
  };
};

export default withBookstoreService(mapMethodsToProps)(HomePage);
