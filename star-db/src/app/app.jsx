import './app.css';

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ApiProvider } from '../components/api-context';
import { Header } from '../components/header';
import { RandomPlanet } from '../components/random-planet';
import { StarshipDetails } from '../components/sw-components';
import {
  LoginPage,
  PeoplePage,
  PlanetsPage,
  SecretPage,
  StarshipsPage,
} from '../pages';
import { Api, DummyApi } from '../services';

export function App() {
  const apiInstance = new Api();
  const dummyApiInstance = new DummyApi();
  const [api, setApi] = useState(apiInstance || dummyApiInstance);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleServiceChange = () => {
    setApi((prevApi) => {
      const Service = prevApi instanceof Api ? DummyApi : Api;
      return new Service();
    });
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <ApiProvider value={api}>
      <Router>
        <div className="container">
          <Header onServiceChange={handleServiceChange} />

          <RandomPlanet />

          <Routes>
            <Route path="/" element={<h2>Welcome to StarDB</h2>} />
            <Route path="/people/:id?" element={<PeoplePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/starships" element={<StarshipsPage />} />
            <Route path="/starships/:id" element={<StarshipDetails />} />
            <Route
              path="/secret"
              element={<SecretPage isLoggedIn={isLoggedIn} />}
            />
            <Route
              path="/login"
              element={
                <LoginPage isLoggedIn={isLoggedIn} onLogin={handleLogin} />
              }
            />

            <Route path="*" element={<h2>Page not found</h2>} />
          </Routes>
        </div>
      </Router>
    </ApiProvider>
  );
}
