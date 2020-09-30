import React from 'react';

import About from './components/About/About';
import Home from './components/Layout/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
    </Router>
  );
}


export default App;

