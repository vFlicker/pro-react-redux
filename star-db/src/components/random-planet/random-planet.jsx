import './random-planet.css';

import { useCallback, useEffect, useState } from 'react';

import { withApi } from '../../HOCs';
import { useRequest } from '../../hooks';
import { compose } from '../../utils';
import { ErrorIndicator } from '../error-indicator';
import { PlanetView } from '../planet-view';
import { Spinner } from '../spinner';

function RandomPlanet({ updateInterval = 12000, getPlanet }) {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), updateInterval);
    return () => clearInterval(interval);
  }, [updateInterval]);

  const getRandomPlanet = useCallback(() => {
    const id = Math.floor(Math.random() * 20) + 1;
    return getPlanet(id);
  }, [getPlanet, time]);

  const { data, loading, error } = useRequest(getRandomPlanet);

  let content = null;
  if (loading) content = <Spinner />;
  else if (error) content = <ErrorIndicator />;
  else content = <PlanetView planet={data} />;

  return <div className="random-planet jumbotron rounded">{content}</div>;
}

const mapRandomPlanetMethodsToProps = (api) => ({
  getPlanet: (id) => api.getPlanet(id),
});

export const WrapperRandomPlanet = compose(
  withApi(mapRandomPlanetMethodsToProps),
)(RandomPlanet);
