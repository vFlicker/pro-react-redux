import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

export default class PeoplePage extends Component {
  state = {
    personId: null,
  }

  onPersonSelected = (personId) => {
    this.setState({ personId })
  }

  render() {
    return (
      <ErrorBoundary>
        <Row
          left={<PersonList onItemSelected={this.onPersonSelected} />}
          right={<PersonDetails itemId={this.state.personId} />}
        />
      </ ErrorBoundary>
    )
  }
}
