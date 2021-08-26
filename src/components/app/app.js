import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../header';
import { CardPage, HomePage } from '../pages';
import './app.css';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/card" component={CardPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
