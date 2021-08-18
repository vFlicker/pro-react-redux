import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage
} from '../pages';
import Api from '../../services/api';
import DummyApi from '../../services/dummy-api';
import { ApiProvider } from '../api-context';
import './app.css';

export default class App extends Component {
  state = {
    api: new Api()
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
    return (
      <ApiProvider value={this.state.api}>
        <div className="container">
          <Header onServiceChange={this.onServiceChange} />

          <RandomPlanet />

          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
        </div>
      </ApiProvider>
    );
  }
};
