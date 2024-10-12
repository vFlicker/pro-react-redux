import { useState } from 'react';

import { ErrorBoundary } from '../components/error-boundary';
import { Row } from '../components/row';
import { PlanetDetails, PlanetList } from '../components/sw-components';

const DEFAULT_PLANET_ID = 1;

export function PlanetsPage() {
  const [planetId, setPlanetId] = useState(DEFAULT_PLANET_ID);

  const handleItemSelected = (id) => {
    setPlanetId(id);
  };

  return (
    <ErrorBoundary>
      <Row
        left={<PlanetList onItemSelected={handleItemSelected} />}
        right={<PlanetDetails itemId={planetId} />}
      />
    </ErrorBoundary>
  );
}
