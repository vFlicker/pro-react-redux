import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Api, DummyApi } from '../../services';
import { ApiProvider } from '../api-context';
import { Header } from '../header';
import { RandomPlanet } from '../random-planet';
import { StarshipDetails } from '../sw-components';
import {
  LoginPage,
  PeoplePage,
  PlanetsPage,
  SecretPage,
  StarshipsPage,
} from '../pages';

import './app.css';

export const App = () => {
  const [api, setApi] = useState(new Api() || new DummyApi());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onServiceChange = () => setApi((prevApi) => {
    const Service = prevApi instanceof Api ? DummyApi : Api;
    return new Service();
  })

  return (
    <ApiProvider value={api}>
      <Router>
        <div className="container">
          <Header onServiceChange={onServiceChange} />

          <RandomPlanet />

          <Switch>
            <Route
              path="/"
              render={() => <h2>Welcome to StarDB</h2>}
              exact
            />
            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets" component={PlanetsPage} />
            <Route path="/starships" component={StarshipsPage} exact />
            <Route
              path="/starships/:id"
              render={
                ({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />
                }
              }
            />
            <Route
              path="/secret"
              render={() => (
                <SecretPage isLoggedIn={isLoggedIn} />
              )}
            />
            <Route
              path="/login"
              render={() => (
                <LoginPage
                  isLoggedIn={isLoggedIn}
                  onLogin={() => setIsLoggedIn(true)}
                />
              )}
            />

            <Route render={() => <h2>Page not found</h2>} />
          </Switch>
        </div>
      </Router>
    </ApiProvider>
  );
};
