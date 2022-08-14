import React from 'react';

import { withApi } from '../../HOCs';
import { ItemDetails, Record } from '../item-details';

const PersonDetails = (props) => (
  <ItemDetails { ...props }>
    <Record field="gender" label="Gender" />
    <Record field="birthYear" label="Birth Year" />
    <Record field="eyeColor" label="Eye Color" />
  </ItemDetails>
);

const mapApiMethodsToProps = (api) => ({
  getData: api.getPerson,
});

export default withApi(mapApiMethodsToProps)(PersonDetails);

