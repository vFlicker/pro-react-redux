import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorButton from '../error-button/error-button';
import './item-details.css';

export default class ItemDetails extends Component {
  state = {
    item: null,
    loaded: true,
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loaded: true })
      this.updateItem();
    }
  }

  onItemLoaded = (item) => {
    this.setState({
      item,
      loaded: false,
    });
  }

  updateItem() {
    const { itemId, getData } = this.props;

    if (!itemId) {
      return;
    }

    getData(itemId)
      .then(this.onItemLoaded);
  }

  render() {
    const {loaded, item} = this.state;

    if (!item) {
      return <span>Select a person from a list</span>;
    }

    const spinner = loaded ? <Spinner /> : null;
    const itemElement = !loaded ? renderItemElement(item) : null;

    return (
      <div className="person-details card">
        {spinner}
        {itemElement}
      </div>
    );
  }
}

const renderItemElement = ({ id, name, gender, birthYear, eyeColor }) => {
  return (
    <React.Fragment>
      <img
        className="person-image"
        src={ `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
        alt={ name }
      />
      <div className="card-body">
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{ gender }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};
