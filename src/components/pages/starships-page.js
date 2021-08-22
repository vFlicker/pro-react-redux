import React from 'react';
import { withRouter } from 'react-router-dom';
import { StarshipList } from '../sw-components';
import ErrorBoundary from '../error-boundary';

const StarshipsPage = ({ history }) => {
  return (
    <ErrorBoundary>
      <StarshipList onItemSelected={ (id) => history.push(id) } />
    </ ErrorBoundary>
  )
}

export default withRouter(StarshipsPage);
