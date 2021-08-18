import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import Api from '../../services/api';
import DummyApi from '../../services/dummy-api';
import { ApiProvider } from '../api-context';
import './app.css';

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    api: new DummyApi()
  };

  onServiceChange = () => {
    this.setState(({ api }) => {
      const Service = api instanceof Api ? DummyApi : Api;

      return {
        api: new Service()
      }
    });
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ApiProvider value={this.state.api}>
        <div className="container">
          <Header onServiceChange={this.onServiceChange} />
          { planet }

          <button
            className="toggle-planet btn btn-warning btn-lg mb-3"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>

          <PeoplePage />
        </div>
      </ApiProvider>
    );
  }
};
