import { ErrorIndicator } from '../error-indicator';
import { Spinner } from '../spinner';

export function QueryResult({ loading, error, data, children }) {
  if (error) return <ErrorIndicator />;
  if (loading || !data) return <Spinner />;
  return children;
}
