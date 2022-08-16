import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bookAddedToCart, fetchBooks } from '../../store';
import { BookItem } from '../book-item';
import { QueryResult } from '../query-result';

import './book-list.css';

export const BookList = () => {
  const { books, loading, error} = useSelector((state) => state.bookList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks())
  }, [dispatch]);

  return (
    <QueryResult error={error} loading={loading} data={books}>
      <ul className="books-list">
        {books.map(({ id, ...book }) => (
          <li key={id}>
            <BookItem
              book={book}
              onAddedToCart={() => dispatch(bookAddedToCart(id))}
            />
          </li>
        ))}
      </ul>
    </QueryResult>
  )
};
