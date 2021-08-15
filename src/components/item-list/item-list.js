import React, { Component } from 'react';
import Spinner from '../spinner';
import Api from '../../api';
import './item-list.css';

export default class ItemList extends Component {
  api = new Api();

  state = {
    peopleList: null,
  }

  onPeopleListLoaded = (peopleList) => {
    this.setState({ peopleList });
  };

  componentDidMount() {
    this.api
      .getAllPeople()
      .then(this.onPeopleListLoaded);
  }

  renderPeople(people) {
    return people.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={ this.props.onPersonSelected.bind(null, id) }>
          { name }
        </li>
      );
    });
  }

  render() {
    const { peopleList } = this.state;

    if (!peopleList) {
      return <Spinner />
    }

    const people = this.renderPeople(peopleList);

    return (
      <ul className="item-list list-group">
        {people}
      </ul>
    );
  }
}
