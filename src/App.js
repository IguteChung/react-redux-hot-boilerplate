import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { RouteTransition, presets } from 'react-router-transition';
import Home from './containers/Home/Home';
import Milestone from './containers/Milestone/Milestone';
import NotFound from './containers/NotFound/NotFound';
import './App.css';

const App = () => (
  <Router>
    <Route render={({ location, history }) => {
      const slide = history.action === 'PUSH' ? presets.slideLeft : presets.slideRight;
      return (
      <div>
        <Helmet>
          <meta name='description' content='Awesome React Redux Hot boilerplate' />
        </Helmet>
        <RouteTransition
          pathname={location.pathname}
          {...slide}
        >
          <Switch key={location.key} location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/milestone" component={Milestone} />
            <Route component={NotFound} />
          </Switch>
        </RouteTransition>
      </div>
    );
  }} />
  </Router>
);

export default App;
