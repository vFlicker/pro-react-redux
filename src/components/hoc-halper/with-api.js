import React from 'react';
import { ApiConsumer } from '../api-context';

const withApi = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <ApiConsumer>
        {
          (api) => {
            const apiProps = mapMethodsToProps(api);

            return (
              <Wrapped { ...props } { ...apiProps } />
            );
          }
        }
      </ ApiConsumer>
    )
  }
};

export default withApi;
