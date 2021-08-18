import React from 'react';
import ItemList from '../item-list';
import { withData, withApi } from '../hoc-halper';

const withChildFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

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

const PersonList = withApi(mapPersonMethodsToProps)(
  withData(
    withChildFunction(renderNameAndYear)(ItemList)));

const PlanetList = withApi(mapPlanetMethodsToProps)(
  withData(
    withChildFunction(renderName)(ItemList)));

const StarshipList = withApi(mapStarshipMethodsToProps)(
  withData(
    withChildFunction(renderNameAndCost)(ItemList)));

export {
  PersonList,
  PlanetList,
  StarshipList
}
