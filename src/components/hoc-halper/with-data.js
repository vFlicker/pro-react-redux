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

    update() {
      this.props.getData()
        .then(this.onDataLoaded);
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      }
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
