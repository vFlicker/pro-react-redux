import React from 'react';

import { ErrorIndicator } from '../error-indicator';
import { Spinner } from '../spiner';

export const QueryResult = ({ loading, error, data, children }) => {
  if (error) return <ErrorIndicator />;

  if (loading || !data) return <Spinner />;

  return children;
};
