import { useNavigate, useParams } from 'react-router-dom';

import { ErrorBoundary } from '../components/error-boundary';
import { Row } from '../components/row';
import { PersonDetails, PersonList } from '../components/sw-components';

const DEFAULT_PERSON_ID = 1;

export function PeoplePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleItemSelected = (id) => {
    navigate(`/people/${id}`);
  };

  return (
    <ErrorBoundary>
      <Row
        left={<PersonList onItemSelected={handleItemSelected} />}
        right={<PersonDetails itemId={id || DEFAULT_PERSON_ID} />}
      />
    </ErrorBoundary>
  );
}
