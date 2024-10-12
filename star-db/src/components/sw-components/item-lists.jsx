import { withApi, withChildFunction, withData } from '../../HOCs';
import { compose } from '../../utils';
import { ItemList } from '../item-list';

function renderPersonItem({ name, birthYear }) {
  return (
    <span>
      {name} ({birthYear})
    </span>
  );
}

function renderPlanetItem({ name }) {
  return <span>{name}</span>;
}

function renderStarshipItem({ name, costInCredits }) {
  return (
    <span>
      {name} ({costInCredits})
    </span>
  );
}

const mapPersonMethodsToProps = (api) => ({ getData: api.getAllPeople });
const mapPlanetMethodsToProps = (api) => ({ getData: api.getAllPlanets });
const mapStarshipMethodsToProps = (api) => ({ getData: api.getAllStarships });

export const PersonList = compose(
  withApi(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderPersonItem),
)(ItemList);

export const PlanetList = compose(
  withApi(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderPlanetItem),
)(ItemList);

export const StarshipList = compose(
  withApi(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderStarshipItem),
)(ItemList);
