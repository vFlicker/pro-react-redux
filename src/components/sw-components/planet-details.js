import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withApi } from '../hoc-halper';

const PlanetDetails = (props) => {
  return (
    <ItemDetails { ...props }>
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
};

const mapMethodsToProps = (api) => {
  return {
    getData: api.getPlanet,
    getImageUrl: api.getPlanetImage,
  };
};

export default withApi(mapMethodsToProps)(PlanetDetails);
