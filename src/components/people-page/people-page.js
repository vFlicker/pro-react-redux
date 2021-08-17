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
