import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import RegistrationClient from './pages/RegistrationClient';
// import LoginClient from './pages/LoginClient';

const App = () => {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/RegistrationClient" component={RegistrationClient} />
          {/* <Route path="/LoginClient" component={LoginClient} /> */}
        </Switch>
      </Router>
  );
}

export default App;
