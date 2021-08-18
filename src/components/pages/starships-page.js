import React, { Component } from 'react';
import { StarshipDetails, StarshipList } from '../sw-components';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

export default class StarshipsPage extends Component {
  state = {
    starshipId: null,
  }

  onStarshipSelected = (starshipId) => {
    this.setState({ starshipId })
  }

  render() {
    return (
      <ErrorBoundary>
        <Row
          left={<StarshipList onItemSelected={this.onStarshipSelected} />}
          right={<StarshipDetails itemId={this.state.starshipId} />}
        />
      </ ErrorBoundary>
    )
  }
}
