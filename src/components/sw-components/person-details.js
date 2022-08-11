import React from 'react';

import ItemDetails, { Record } from '../item-details/item-details';
import { withApi } from '../../HOCs';

const PersonDetails = (props) => (
  <ItemDetails { ...props }>
    <Record field="gender" label="Gender" />
    <Record field="birthYear" label="Birth Year" />
    <Record field="eyeColor" label="Eye Color" />
  </ItemDetails>
);

const mapMethodsToProps = (api) => ({
  getData: api.getPerson,
  getImageUrl: api.getPersonImage,
});

export default withApi(mapMethodsToProps)(PersonDetails);

