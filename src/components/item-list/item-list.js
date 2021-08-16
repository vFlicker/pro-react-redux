import React, { Component } from 'react';
import Spinner from '../spinner';
import './item-list.css';

export default class ItemList extends Component {
  state = {
    items: null,
  }

  onItemsLoaded = (items) => {
    this.setState({ items });
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then(this.onItemsLoaded);
  }

  renderItems(items) {
    return items.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);

      return (
        <li
          className="list-group-item"
          key={id}
          onClick={ this.props.onItemSelected.bind(null, id) }>
          { label }
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
