import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false,
    }

    onDataLoaded = (data) => {
      this.setState({
        data,
        loading: false,
      });
    };

    onError = () => {
      this.setState({
        error: true,
        loading: false
      });
    }

    update() {
      this.setState({
        loading: true,
        error: false,
      });

      this.props.getData()
        .then(this.onDataLoaded)
        .catch(this.onError);
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
      const { data, loading, error } = this.state;


      if (loading) {
        return <Spinner />
      }

      if (error) {
        return <ErrorIndicator />
      }

      return <View {...this.props} data={data} />
    }
  };
};

export default withData;
