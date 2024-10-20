import { Spinner } from './Spinner';

export function QueryResult({ loading, error, children }) {
  if (error) return <p>Some error occurred</p>;
  if (loading) return <Spinner>Loading...</Spinner>;
  return children;
}
