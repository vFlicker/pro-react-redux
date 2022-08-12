import React, { useState, useEffect, useCallback } from 'react';

import { withApi } from '../../HOCs';
import { useData } from '../../hooks';
import { Spinner } from '../spinner';
import { ErrorIndicator } from '../error-indicator';
import { PlanetView } from '../planet-view';

import './random-planet.css';

const RandomPlanet = ({ updateInterval, getPlanet }) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), updateInterval);
    return () => clearInterval(interval);
  }, [updateInterval]);

  const getRandomPlanet = useCallback(() => {
    const id = Math.floor(Math.random() * 20) + 1;
    return getPlanet(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPlanet, time]);

  const { data, loading, error } = useData(getRandomPlanet);

  const hasData = !(loading || error);
  const spinner = loading && <Spinner />;
  const content = hasData && <PlanetView planet={data} />;
  const errorMessage = error && <ErrorIndicator />;

  return (
    <div className="random-planet jumbotron rounded">
      {spinner}
      {content}
      {errorMessage}
    </div>
  );
}

RandomPlanet.defaultProps = {
  updateInterval: 12000,
}

const mapRandomPlanetMethodsToProps = (api) => ({
  getPlanet: (id) => api.getPlanet(id),
});

export default withApi(mapRandomPlanetMethodsToProps)(RandomPlanet);
