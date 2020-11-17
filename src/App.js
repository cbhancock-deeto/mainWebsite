import React from 'react';

import About from './components/About/About';
import Home from './components/Layout/Home';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#111111',
      light: '#555c5c',
    },
    secondary: {
      main: '#c0c0c0',
    }
  },

});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />

        </Switch>
    </Router>
    </ThemeProvider>

  );
}


export default App;

