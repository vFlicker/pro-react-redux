import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import Row from '../row';
import './people-page.css';

export default class PeoplePage extends Component {
  state = {
    personId: null,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onPersonSelected = (personId) => {
    this.setState({ personId })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList onPersonSelected={this.onPersonSelected} />
    );

    const personDetails = (
      <PersonDetails personId={this.state.personId} />
    );

    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}
