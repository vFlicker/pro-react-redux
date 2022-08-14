import React from 'react';

import { compose } from '../../utils';
import {
  withData,
  withApi,
  withChildFunction,
} from '../../HOCs';
import { ItemList } from '../item-list';

const renderPersonData = ({ name, birthYear }) => {
  return <span>{name} ({birthYear})</span>
};

const renderPlanetData = ({ name }) => {
  return <span>{name}</span>;
};

const renderStarshipData = ({ name, costInCredits }) => {
  return <span>{name} ({costInCredits})</span>
};

const mapPersonMethodsToProps = (api) => ({
  getData: api.getAllPeople,
});

const mapPlanetMethodsToProps = (api) => ({
  getData: api.getAllPlanets,
});

const mapStarshipMethodsToProps = (api) => ({
  getData: api.getAllStarships,
});

export const PersonList = compose(
  withApi(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderPersonData)
)(ItemList);

export const PlanetList = compose(
  withApi(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderPlanetData)
)(ItemList);

export const StarshipList = compose(
  withApi(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderStarshipData)
)(ItemList);
