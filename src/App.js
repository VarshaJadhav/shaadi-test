import React from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login'
import { PrivateRoute } from './routes';
import Slides from './components/Slides';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/slides" component={Slides} />
    </Switch>
  </Router>
  );
}

export default App;
