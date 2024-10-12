import { withApi, withData } from '../../HOCs';
import { compose } from '../../utils';
import { ItemDetails, Record } from '../item-details';

const PlanetDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="population" label="Population" />
    <Record field="rotationPeriod" label="Rotation Period" />
    <Record field="diameter" label="Diameter" />
  </ItemDetails>
);

const mapApiMethodsToProps = (api) => ({
  getData: api.getPlanet,
});

export default compose(withApi(mapApiMethodsToProps), withData)(PlanetDetails);
