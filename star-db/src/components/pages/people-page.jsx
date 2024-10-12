import { useParams } from "react-router-dom";

import { PersonDetails, PersonList } from "../sw-components";
import { ErrorBoundary } from "../error-boundary";
import { Row } from "../row";
import { browserHistory } from "../../browserHistory";

export const PeoplePage = () => {
  const { id } = useParams();

  return (
    <ErrorBoundary>
      <Row
        left={<PersonList onItemSelected={(id) => browserHistory.push(id)} />}
        right={<PersonDetails itemId={id || 1} />}
      />
    </ErrorBoundary>
  );
};
