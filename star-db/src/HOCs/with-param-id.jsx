import { useParams } from 'react-router-dom';

export const withParamId = (View) => {
  return function WithParamId(props) {
    const { id } = useParams();
    return <View itemId={id} {...props} />;
  };
};
