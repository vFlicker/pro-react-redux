import './book-list.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooks } from '../../store';
import { BookItem } from '../book-item';
import { QueryResult } from '../query-result';

export function BookList() {
  const dispatch = useDispatch();

  const { books, loading, error } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <QueryResult error={error} loading={loading} data={books}>
      <ul className="books-list">
        {books?.map((book) => (
          <li key={book.id}>
            <BookItem book={book} />
          </li>
        ))}
      </ul>
    </QueryResult>
  );
}
