import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withApi } from '../hoc-halper';

const PlanetDetails = ({ itemId, api }) => {
  const { getPlanet, getPlanetImage } = api;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  )
};

export default withApi(PlanetDetails);
