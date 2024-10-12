import { withApi, withData } from '../../HOCs';
import { compose } from '../../utils';
import { ItemDetails, Record } from '../item-details';

function PersonDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth Year" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
}

const mapApiMethodsToProps = (api) => ({ getData: api.getPerson });

export const WrapperPersonDetails = compose(
  withApi(mapApiMethodsToProps),
  withData,
)(PersonDetails);
