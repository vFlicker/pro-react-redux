import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withApi } from '../hoc-halper';

const PersonDetails = ({ itemId, api }) => {
  const { getPerson, getPersonImage } = api;

  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}>

      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export default withApi(PersonDetails);

