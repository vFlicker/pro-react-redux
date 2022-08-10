import React from 'react';

import { ItemList } from '../item-list';
import {
  withData,
  withApi,
  withChildFunction,
  compose
} from '../hoc-halper';

const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndYear = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;
const renderNameAndCost = ({ name, costInCredits }) => <span>{name} ({costInCredits})</span>;

const mapPersonMethodsToProps = (api) => {
  return {
    getData: api.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (api) => {
  return {
    getData: api.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (api) => {
  return {
    getData: api.getAllStarships,
  };
};

const PersonList = compose(
  withApi(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderNameAndYear)
)(ItemList);

const PlanetList = compose(
  withApi(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withApi(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderNameAndCost)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList
}
