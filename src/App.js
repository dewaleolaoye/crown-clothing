import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Homepage from './pages/homepage.component';

const HatsPage = () => (
  <React.Fragment>
    <h1>Hats page</h1>
  </React.Fragment>
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
};

export default App;
