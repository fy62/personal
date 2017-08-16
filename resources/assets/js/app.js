require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import thunkMiddleware from 'redux-thunk';
// import {connect, Provider} from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import reducer from './reducer';
import App from './components/App';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Vid from './components/Vid';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#3A405A',
    primary1Color: '#1F2A78',
    // primary2Color: Colors.indigo700,
    // accent1Color: Colors.redA200,
  }
});

// const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const history = createBrowserHistory();

render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/:else" component={() => <Redirect to='/'/>}/>
        </Switch>

      </div>
    </Router>
  </MuiThemeProvider>
), document.getElementById('app'));
