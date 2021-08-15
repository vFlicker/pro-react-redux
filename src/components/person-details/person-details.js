import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorButton from '../error-button/error-button';
import Api from '../../api';
import './person-details.css';

export default class PersonDetails extends Component {
  api = new Api();

  state = {
    person: null,
    loaded: true,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loaded: true })
      this.updatePerson();
    }
  }

  onPersonLoaded = (person) => {
    this.setState({
      person,
      loaded: false,
    });
  }

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.api
      .getPerson(personId)
      .then(this.onPersonLoaded);
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const spinner = this.state.loaded ? <Spinner /> : null;
    const person = !this.state.loaded ? personItem(this.state.person) : null;

    return (
      <div className="person-details card">
        {spinner}
        {person}
      </div>
    );
  }
}

const personItem = ({ id, name, gender, birthYear, eyeColor }) => {
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
