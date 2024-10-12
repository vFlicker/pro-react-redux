import { Navigate } from "react-router-dom";

export const SecretPage = ({ isLoggedIn }) => {
  if (isLoggedIn)
    return (
      <div className="jumbotron text-center">
        <h3>This page is full secret</h3>
      </div>
    );

  return <Navigate to="/login" />;
};
