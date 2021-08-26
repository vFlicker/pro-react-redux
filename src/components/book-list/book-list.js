import React, { Component } from 'react';
import BookItem from '../book-item';
import './book-list.css';

export default class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <ul>
        {
          books.map(({ id, ...book }) => {
            return (
              <li key={id}>
                <BookItem book={book} />
              </li>
            );
          })
        }
      </ul>
    );
  }
};
