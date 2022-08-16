import React, { useContext } from 'react';

import { ApiContext } from '../components/api-context';

export const withapiService = () => (Wrapper) => {
  return (props) => {
    const api = useContext(ApiContext);
    return <Wrapper {...props} apiService={api} />
  };
};
