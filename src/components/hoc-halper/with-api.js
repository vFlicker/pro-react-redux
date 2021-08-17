import React from 'react';
import { ApiConsumer } from '../api-context';

const withApi = (Wrapped) => {
  return (props) => {
    return (
      <ApiConsumer>
        {
          (api) => {
            return (
              <Wrapped { ...props } api={api} />
            );
          }
        }
      </ ApiConsumer>
    )
  }
};

export default withApi;
