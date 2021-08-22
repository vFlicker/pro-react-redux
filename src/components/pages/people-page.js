import React from 'react';
import { withRouter } from 'react-router-dom';
import { PersonDetails, PersonList } from '../sw-components';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <ErrorBoundary>
      <Row
        left={<PersonList onItemSelected={ (id) => history.push(id) } />}
        right={<PersonDetails itemId={id} />}
      />
    </ ErrorBoundary>
  )
}

export default withRouter(PeoplePage);
