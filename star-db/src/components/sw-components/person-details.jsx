import { withApi, withData } from '../../HOCs';
import { compose } from '../../utils';
import { ItemDetails, Record } from '../item-details';

const PersonDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="gender" label="Gender" />
    <Record field="birthYear" label="Birth Year" />
    <Record field="eyeColor" label="Eye Color" />
  </ItemDetails>
);

const mapApiMethodsToProps = (api) => ({
  getData: api.getPerson,
});

export default compose(withApi(mapApiMethodsToProps), withData)(PersonDetails);
