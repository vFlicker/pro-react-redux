import React, { Component } from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import Api from '../../api';
import './people-page.css';

export default class PeoplePage extends Component {
  api = new Api();

  state = {
    personId: null,
  }

  onPersonSelected = (personId) => {
    this.setState({ personId })
  }

  render() {
    const itemList = (
      <PersonList
        onItemSelected={this.onPersonSelected}
        renderItem={(item) => `${item.name} (${item.birthYear})`}
      />
    );


    const personDetails = (
      <PersonDetails itemId={this.state.personId} />
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ ErrorBoundary>
    )
  }
}
