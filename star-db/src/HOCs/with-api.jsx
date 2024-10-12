import { useContext } from 'react';

import { ApiContext } from '../components/api-context';

export const withApi = (mapMethodsToProps) => (Wrapped) => {
  return function WithApi(props) {
    const api = useContext(ApiContext);
    const apiProps = mapMethodsToProps(api);
    return <Wrapped {...props} {...apiProps} />;
  };
};
