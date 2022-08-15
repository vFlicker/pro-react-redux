import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';
import { App } from './components/app';
import { ErrorBoundary } from './components/error-boundary';
import { BookstoreService } from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BookstoreServiceProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookstoreServiceProvider>
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
