import React from 'react';
import './App.css';
import Topbar from './components/Topbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route path = "/random">

        </Route>
        <Route path = "/all">

        </Route>
        <Route path = "/">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
