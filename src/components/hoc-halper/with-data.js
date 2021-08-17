import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
    }

    onDataLoaded = (data) => {
      this.setState({ data });
    };

    componentDidMount() {
      this.props.getData()
        .then(this.onDataLoaded);
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />
      }

      return <View {...this.props} data={data} />
    }
  };
};

export default withData;
