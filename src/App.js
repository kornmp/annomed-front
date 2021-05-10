import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ClientPlatform from './pages/ClientPlatform';
import RegistrationWorker from './pages/RegistrationWorker';
import RegistrationClient from './pages/RegistrationClient';
import LoginWorker from './pages/LoginWorker';
import LoginClient from './pages/LoginClient';

const App = () => {

  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ClientPlatform" component={ClientPlatform} />
          <Route path="/LoginWorker" component={LoginWorker} />   
          <Route path="/LoginClient" component={LoginClient} />
          <Route path="/RegistrationWorker" component={RegistrationWorker} />
          <Route path="/RegistrationClient" component={RegistrationClient} />
        </Switch>
      </Router>
  );
}

export default App;
