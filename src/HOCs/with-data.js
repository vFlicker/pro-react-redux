import React from 'react';

import { useData } from '../hooks';
import { Spinner } from '../components/spinner';
import { ErrorIndicator } from '../components/error-indicator';

export const withData = (View) => {
  return ({ getData, ...props }) => {
    const { data, loading, error } = useData(getData);

    if (loading) return <Spinner />;

    if (error) return <ErrorIndicator />;

    return <View {...props} data={data} />
  };
}
