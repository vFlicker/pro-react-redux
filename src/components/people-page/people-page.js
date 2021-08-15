import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
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

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onPersonSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.personId} />
        </div>
      </div>
    )
  }
}
