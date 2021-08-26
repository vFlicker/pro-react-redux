import React, { Fragment } from 'react';
import './book-item.css';

const BookItem = ({ book }) => {
  const { title, author } = book;

  return (
    <Fragment>
      <span>{title}</span>
      <span>{author}</span>
    </Fragment>
  );
};

export default BookItem;
