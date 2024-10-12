import { useNavigate } from 'react-router-dom';

import { ErrorBoundary } from '../components/error-boundary';
import { StarshipList } from '../components/sw-components';

export function StarshipsPage() {
  const navigate = useNavigate();

  return (
    <ErrorBoundary>
      <StarshipList onItemSelected={(id) => navigate(id)} />
    </ErrorBoundary>
  );
}
