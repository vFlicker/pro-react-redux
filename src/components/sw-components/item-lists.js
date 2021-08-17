import React from 'react';
import ItemList from '../item-list';
import { withData } from '../hoc-halper';
import Api from '../../services/api';

const api = new Api();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = api;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
};

const renderNameAndYear = ({ name, birthYear }) => <span>{name} ({birthYear})</span>;
const renderNameAndCost = ({ name, costInCredits }) => <span>{name} ({costInCredits})</span>;

const PersonList = withData(
  withChildFunction(ItemList, renderNameAndYear),
  getAllPeople
);

const PlanetList = withData(
  withChildFunction(ItemList, renderNameAndYear),
  getAllPlanets
);

const StarshipList = withData(
  withChildFunction(ItemList, renderNameAndCost),
  getAllStarships
);

export {
  PersonList,
  PlanetList,
  StarshipList
}
