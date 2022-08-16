import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from './store';
import { App } from './components/app';
import { ErrorBoundary } from './components/error-boundary';
import { ApiService } from './services/api-service';
import { ApiProvider } from './components/api-context';

const apiService = new ApiService();

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <ApiProvider value={apiService}>
          <Router>
            <App />
          </Router>
        </ApiProvider>
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
