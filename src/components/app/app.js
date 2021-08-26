import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spiner';
import BookstoreService from '../../services/bookstore-service';
import { BookstoreServiceProvider } from '../bookstore-service-context';
import './app.css';

export default class App extends Component {
  state = {
    api: new BookstoreService(),
  }

  render() {
    return (
      <BookstoreServiceProvider value={this.state.api}>
        <h1>React App!</h1>
        <ErrorIndicator />
        <Spinner />
      </BookstoreServiceProvider>
    );
  }
}
