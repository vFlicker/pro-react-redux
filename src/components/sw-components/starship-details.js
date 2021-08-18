import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withApi } from '../hoc-halper';

const StarshipDetails = (props) => {
  return (
    <ItemDetails { ...props } >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (api) => {
  return {
    getData: api.getStarship,
    getImageUrl: api.getStarshipImage,
  };
};

export default withApi(mapMethodsToProps)(StarshipDetails);
