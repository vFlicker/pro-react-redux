import React, { Component } from 'react';

import { Spinner } from '../spinner';
import { ErrorButton } from '../error-button';
import './item-details.css';

export const Record = ({ item, field, label }) => (
  <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[field]}</span>
  </li>
);

export class ItemDetails extends Component {
  state = {
    image: null,
    item: null,
    loaded: true,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.setState({ loaded: true })
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then((item) => {
        this.setState({
          image: getImageUrl(itemId),
          item,
          loaded: false,
        });
      });
  }

  render() {
    const { image, item, loaded } = this.state;

    if (!item) {
      return <span>Select an item from the list</span>;
    }

    const itemList = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { item });
    })

    const spinner = loaded ? <Spinner /> : null;
    const itemElement = !loaded ? renderItemElement(item.name, image, itemList) : null;

    return (
      <div className="person-details card">
        {spinner}
        {itemElement}
      </div>
    );
  }
}

const renderItemElement = (name, image, itemList) => {
  return (
    <React.Fragment>
      <img
        className="person-image"
        src={image}
        alt={name}
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {itemList}
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};
