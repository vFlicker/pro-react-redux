import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
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
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.api.getAllPeople}
        renderItem={(item) => `${item.name} (${item.birthYear})`}
      />
    );

    const personDetails = (
      <ItemDetails
        itemId={this.state.personId}
        getData={this.api.getPerson}
      />
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ ErrorBoundary>
    )
  }
}
