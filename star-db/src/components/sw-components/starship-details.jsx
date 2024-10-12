import { withApi, withData, withParamId } from '../../HOCs';
import { compose } from '../../utils';
import { ItemDetails, Record } from '../item-details';

function StarshipDetails(props) {
  return (
    <ItemDetails {...props}>
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="cost" />
    </ItemDetails>
  );
}

const mapApiMethodsToProps = (api) => ({ getData: api.getStarship });

export const WrappedStarshipDetails = compose(
  withApi(mapApiMethodsToProps),
  withParamId,
  withData,
)(StarshipDetails);
