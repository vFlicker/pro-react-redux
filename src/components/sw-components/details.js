import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import Api from '../../api';

const api = new Api();

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage
} = api;

const PersonDetails = ({ itemId }) => {
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

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}>

      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const StarshipDetails = ({ itemId }) => {
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

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
