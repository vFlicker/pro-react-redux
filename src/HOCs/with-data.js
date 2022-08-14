import React, { useCallback } from 'react';

import { useData } from '../hooks';
import { Spinner } from '../components/spinner';
import { ErrorIndicator } from '../components/error-indicator';

export const withData = (View) => {
  return ({ getData, itemId, ...props }) => {
    const getDataById = useCallback(() => getData(itemId), [getData, itemId]);

    const { data, loading, error } = useData(itemId ? getDataById : getData);

    if (loading) return <Spinner />;

    if (error) return <ErrorIndicator />;

    return <View {...props} data={data} />
  };
}
