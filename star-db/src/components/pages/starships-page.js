import React from 'react';
import { useHistory } from 'react-router-dom';

import { StarshipList } from '../sw-components';
import { ErrorBoundary } from '../error-boundary';

export const StarshipsPage = () => {
  const history = useHistory();

  return (
    <ErrorBoundary>
      <StarshipList onItemSelected={(id) => history.push(id)} />
    </ErrorBoundary>
  )
}
