import React, { Component } from 'react';
import { PlanetDetails, PlanetList } from '../sw-components';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

export default class PlanetsPage extends Component {
  state = {
    planetId: null,
  }

  onPlanetSelected = (planetId) => {
    this.setState({ planetId })
  }

  render() {
    return (
      <ErrorBoundary>
        <Row
          left={<PlanetList onItemSelected={this.onPlanetSelected} />}
          right={<PlanetDetails itemId={this.state.planetId} />}
        />
      </ ErrorBoundary>
    )
  }
}
