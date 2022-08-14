import React from 'react';

import { withApi } from '../../HOCs';
import { ItemDetails, Record } from '../item-details';

const StarshipDetails = (props) => (
  <ItemDetails { ...props } >
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="cost" />
  </ItemDetails>
);

const mapApiMethodsToProps = (api) => ({
  getData: api.getStarship,
});

export default withApi(mapApiMethodsToProps)(StarshipDetails);
