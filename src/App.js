import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={ShopPage} />
      </Switch>
    </div>
  );
};

export default App;
