import React, { Fragment } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spiner';
import './app.css';

const App = () => {
  return (
    <Fragment>
      <h1>React App!</h1>
      <ErrorIndicator />
      <Spinner />
    </Fragment>
  );
}

export default App;
