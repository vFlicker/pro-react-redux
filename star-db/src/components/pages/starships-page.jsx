import { StarshipList } from "../sw-components";
import { ErrorBoundary } from "../error-boundary";
import { browserHistory } from "../../browserHistory";

export const StarshipsPage = () => {
  return (
    <ErrorBoundary>
      <StarshipList onItemSelected={(id) => browserHistory.push(id)} />
    </ErrorBoundary>
  );
};
