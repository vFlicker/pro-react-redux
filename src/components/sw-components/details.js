import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { ApiConsumer } from '../api-context';

const PersonDetails = ({ itemId }) => {
  return (
    <ApiConsumer>
      {
        ({ getPerson, getPersonImage }) => {
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
        }
      }
    </ ApiConsumer>
  );
};

const PlanetDetails = ({ itemId }) => {
  return (
    <ApiConsumer>
      {
        ({ getPlanet, getPlanetImage }) => {
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
        }
      }
    </ApiConsumer>
  );
};

const StarshipDetails = ({ itemId }) => {
  return (
    <ApiConsumer>
      {
        ({ getStarship, getStarshipImage }) => {
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
        }
      }
    </ ApiConsumer>
  );
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}
