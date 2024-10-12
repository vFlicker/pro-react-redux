import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Api, DummyApi } from "../../services";
import { ApiProvider } from "../api-context";
import { Header } from "../header";
import { RandomPlanet } from "../random-planet";
import { StarshipDetails } from "../sw-components";
import {
  LoginPage,
  PeoplePage,
  PlanetsPage,
  SecretPage,
  StarshipsPage,
} from "../pages";

import "./app.css";
import { HistoryRouter } from "../history-router";
import { browserHistory } from "../../browserHistory";

export const App = () => {
  const [api, setApi] = useState(new Api() || new DummyApi());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onServiceChange = () =>
    setApi((prevApi) => {
      const Service = prevApi instanceof Api ? DummyApi : Api;
      return new Service();
    });

  return (
    <ApiProvider value={api}>
      <HistoryRouter history={browserHistory}>
        <div className="container">
          <Header onServiceChange={onServiceChange} />

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
                <LoginPage
                  isLoggedIn={isLoggedIn}
                  onLogin={() => setIsLoggedIn(true)}
                />
              }
            />

            <Route element={<h2>Page not found</h2>} />
          </Routes>
        </div>
      </HistoryRouter>
    </ApiProvider>
  );
};
