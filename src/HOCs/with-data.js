import React from 'react';

import { useData } from '../hooks/use-data';
import { Spinner } from '../components/spinner';
import { ErrorIndicator } from '../components/error-indicator';

export const withData = (View) => (props) => {
  const { data, loading, error } = useData(props);

  if (loading) return <Spinner />;

  if (error) return <ErrorIndicator />;

  return <View {...props} data={data} />
};
