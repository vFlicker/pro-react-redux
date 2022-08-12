import React from 'react';

import { withApi } from '../../HOCs';
import { ItemDetails, Record } from '../item-details/item-details';

const PlanetDetails = (props) => (
  <ItemDetails { ...props }>
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
  </ItemDetails>
)

const mapMethodsToProps = (api) => ({
  getData: api.getPlanet,
  getImageUrl: api.getPlanetImage,
});

export default withApi(mapMethodsToProps)(PlanetDetails);
