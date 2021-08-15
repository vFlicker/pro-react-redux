import React, { Component } from 'react';
import './error-button.css';

export default class ErrorButton extends Component {
  state = {
    renderError: false,
  }

  onClick = () => {
    this.setState({ renderError: true })
  }

  render() {
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    return(
      <button
        className="btn error-button btn-danger btn-lg"
        onClick={ this.onClick }>
        Throw Error
      </button>
    );
  }
}
