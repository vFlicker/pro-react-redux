import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import { StarshipDetails } from '../sw-components';

import {
  LoginPage,
  PeoplePage,
  PlanetsPage,
  SecretPage,
  StarshipsPage,
} from '../pages';

import Api from '../../services/api';
import DummyApi from '../../services/dummy-api';
import { ApiProvider } from '../api-context';
import './app.css';

export default class App extends Component {
  state = {
    api: new Api(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onServiceChange = () => {
    this.setState(({ api }) => {
      const Service = api instanceof Api ? DummyApi : Api;

      return {
        api: new Service()
      }
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ApiProvider value={this.state.api}>
        <Router>
          <div className="container">
            <Header onServiceChange={this.onServiceChange} />

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
                    onLogin={this.onLogin}
                  />
                )}
              />

              <Route render={() => <h2>Page not found</h2>} />
            </Switch>
          </div>
        </Router>
      </ApiProvider>
    );
  }
};
