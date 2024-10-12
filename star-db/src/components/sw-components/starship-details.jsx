import { useParams } from 'react-router-dom';

import { withApi, withData } from '../../HOCs';
import { compose } from '../../utils';
import { ItemDetails, Record } from '../item-details';

const StarshipDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="model" label="Model" />
    <Record field="length" label="Length" />
    <Record field="costInCredits" label="cost" />
  </ItemDetails>
);

const mapApiMethodsToProps = (api) => ({
  getData: api.getStarship,
});

export const withId = (View) => {
  return (props) => {
    const { id } = useParams();
    return <View itemId={id} {...props} />;
  };
};

export default compose(
  withApi(mapApiMethodsToProps),
  withId,
  withData,
)(StarshipDetails);
