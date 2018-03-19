import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/NotFound/NotFound';
import './styles/common.css';
import './styles/bootstrap-grid.min.css';

const App = () => (
  <Router>
    <div className="container">
      <Helmet>
        <meta name="description" content="Awesome React Redux Hot boilerplate" />
      </Helmet>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
