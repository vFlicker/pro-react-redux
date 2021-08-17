import React from 'react';
import { ApiConsumer } from '../api-context';

const withApi = (Wrapped, mapMethodsToProps) => {
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
