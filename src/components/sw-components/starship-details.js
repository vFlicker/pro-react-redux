import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withApi } from '../hoc-halper';

const StarshipDetails = ({ itemId, api }) => {
  const { getStarship, getStarshipImage } = api;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}>

      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="cost" />
    </ItemDetails>
  );
};

export default withApi(StarshipDetails);
