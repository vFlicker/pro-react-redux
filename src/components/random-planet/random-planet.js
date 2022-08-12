import React, { useState, useEffect, useCallback } from 'react';

import { withApi } from '../../HOCs';
import { Spinner } from '../spinner';
import { ErrorIndicator } from '../error-indicator';
import { PlanetView } from '../planet-view';

import './random-planet.css';

const RandomPlanet = ({ updateInterval, getPlanet }) => {
  const [data, setData] = useState({
    planet: null,
    loading: true,
    error: false,
  });

  const updatePlanet = useCallback(async () => {
    const id = Math.floor(Math.random() * 20) + 1;

    try {
      const planet = await getPlanet(id);

      setData({
        planet,
        loading: false,
        error: false,
      });
    } catch (err) {
      setData({
        planet: null,
        loading: false,
        error: true,
      });
    }
  }, [getPlanet]);

  useEffect(() => {
    updatePlanet();
    const intervalId = setInterval(updatePlanet, updateInterval);

    return () => clearInterval(intervalId);
  }, [updateInterval, updatePlanet]);

  const { planet, loading, error } = data;

  const hasData = !(loading || error);
  const spinner = loading && <Spinner />;
  const content = hasData && <PlanetView planet={planet} />;
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
