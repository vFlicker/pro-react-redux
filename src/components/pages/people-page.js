import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { PersonDetails, PersonList } from '../sw-components';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

export const PeoplePage = () => {
  const { id } = useParams();
  const history = useHistory();

  return (
    <ErrorBoundary>
      <Row
        left={<PersonList onItemSelected={(id) => history.push(id)} />}
        right={<PersonDetails itemId={id} />}
      />
    </ErrorBoundary>
  )
}
