import './app.css';

import { Route, Routes } from 'react-router-dom';

import { Header } from '../components/header';
import { AppRoute } from '../constants';
import { CartPage } from '../pages/cart';
import { HomePage } from '../pages/home';

export function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path={AppRoute.HOME} element={<HomePage />} />
          <Route path={AppRoute.CART} element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}
