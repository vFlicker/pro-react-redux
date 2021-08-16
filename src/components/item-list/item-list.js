import React, { Component } from 'react';
import Spinner from '../spinner';
import Api from '../../api';
import './item-list.css';

export default class ItemList extends Component {
  api = new Api();

  state = {
    items: null,
  }

  onItemsLoaded = (items) => {
    this.setState({ items });
  };

  componentDidMount() {
    this.api
      .getAllPeople()
      .then(this.onItemsLoaded);
  }

  renderItems(items) {
    return items.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={ this.props.onItemSelected.bind(null, id) }>
          { name }
        </li>
      );
    });
  }

  render() {
    const { items } = this.state;

    if (!items) {
      return <Spinner />
    }

    const itemList = this.renderItems(items);

    return (
      <ul className="item-list list-group">
        {itemList}
      </ul>
    );
  }
}
