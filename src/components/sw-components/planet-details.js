import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import { withApi } from '../../HOCs';

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
