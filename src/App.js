import React from 'react';
import './pages/homepage.styles.scss';
import './App.css';

import Homepage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';

const App = () => {
  return (
    <>
      <Homepage />
      <ShopPage />
    </>
  );
};

export default App;
