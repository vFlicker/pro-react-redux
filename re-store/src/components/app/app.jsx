import './app.css';

import { Route, Routes } from 'react-router-dom';

import { Header } from '../header';
import { CartPage, HomePage } from '../pages';

export const App = () => (
  <div className="wrapper">
    <Header numItems={5} total={210} />
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  </div>
);
