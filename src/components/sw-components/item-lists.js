import ItemList from '../item-list';
import withData from '../hoc-halper';
import Api from '../../api';

const api = new Api();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = api;

const PersonList = withData(ItemList, getAllPeople)
const PlanetList = withData(ItemList, getAllPlanets)
const StarshipList = withData(ItemList, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}
