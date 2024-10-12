import { Navigate } from 'react-router-dom';

export const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) return <Navigate to="/" />;

  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
