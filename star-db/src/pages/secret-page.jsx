import { Navigate } from 'react-router-dom';

export function SecretPage({ isLoggedIn }) {
  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <div className="jumbotron text-center">
      <h3>This page is full secret</h3>
    </div>
  );
}
