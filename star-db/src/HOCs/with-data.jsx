import { useCallback } from 'react';

import { ErrorIndicator } from '../components/error-indicator';
import { Spinner } from '../components/spinner';
import { useRequest } from '../hooks';

export const withData = (View) => {
  return function WithData({ getData, itemId, ...props }) {
    const getDataById = useCallback(() => getData(itemId), [getData, itemId]);
    const { data, loading, error } = useRequest(itemId ? getDataById : getData);

    if (loading) return <Spinner />;
    if (error) return <ErrorIndicator />;
    return <View {...props} data={data} />;
  };
};
