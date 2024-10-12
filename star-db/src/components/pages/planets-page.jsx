import { useState } from 'react';

import { ErrorBoundary } from '../error-boundary';
import { Row } from '../row';
import { PlanetDetails, PlanetList } from '../sw-components';

export const PlanetsPage = () => {
  const [planetId, setPlanetId] = useState(1);

  return (
    <ErrorBoundary>
      <Row
        left={<PlanetList onItemSelected={(id) => setPlanetId(id)} />}
        right={<PlanetDetails itemId={planetId} />}
      />
    </ErrorBoundary>
  );
};
