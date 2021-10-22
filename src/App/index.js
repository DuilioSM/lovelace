import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutUs from '../AboutUs';
import Home from '../Home'

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>
        <Route path='/AboutUs' exact>
          <AboutUs/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
