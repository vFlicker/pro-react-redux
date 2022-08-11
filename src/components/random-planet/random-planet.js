import React, { useState, useEffect, useCallback, useMemo } from 'react';

import { Api } from '../../services';
import { Spinner } from '../spinner';
import { ErrorIndicator } from '../error-indicator';
import { PlanetView } from '../planet-view';
import './random-planet.css';

export const RandomPlanet = ({ updateInterval }) => {
  const [data, setData] = useState({
    planet: null,
    loading: true,
    error: false,
  });

  const onPlanetLoaded = (planet) => setData({
    planet,
    loading: false,
    error: false,
  });

  const onError = () => setData({
    planet: null,
    loading: false,
    error: true,
  });

  const api = useMemo(() => new Api(), []);

  const updatePlanet = useCallback(async () => {
    const id = Math.floor(Math.random() * 20) + 1;

    try {
      const planet = await api.getPlanet(id);
      onPlanetLoaded(planet);
    } catch (err) {
      onError();
    }
  }, [api]);

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
