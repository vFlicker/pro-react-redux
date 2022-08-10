import React, { useState } from 'react';

import { PlanetDetails, PlanetList } from '../sw-components';
import ErrorBoundary from '../error-boundary';
import Row from '../row';

export const PlanetsPage = () => {
  const [planetId, setPlanetId] = useState(null);

  return (
    <ErrorBoundary>
      <Row
        left={<PlanetList onItemSelected={(id) => setPlanetId(id)} />}
        right={<PlanetDetails itemId={planetId} />}
      />
    </ ErrorBoundary>
  )
}
