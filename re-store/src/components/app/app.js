import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../header';
import { CartPage, HomePage } from '../pages';

import './app.css';

export const App = () => (
  <div className="wrapper">
    <Header numItems={5} total={210} />
    <main className="main">
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  </div>
);
