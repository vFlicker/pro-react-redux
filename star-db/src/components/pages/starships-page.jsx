import { browserHistory } from '../../browserHistory';
import { ErrorBoundary } from '../error-boundary';
import { StarshipList } from '../sw-components';

export const StarshipsPage = () => {
  return (
    <ErrorBoundary>
      <StarshipList onItemSelected={(id) => browserHistory.push(id)} />
    </ErrorBoundary>
  );
};
