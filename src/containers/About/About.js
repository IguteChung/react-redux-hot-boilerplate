import React, { Component } from 'react';
import AppToolbar from '../../components/AppToolbar/AppToolbar';
import createHistory from 'history/createBrowserHistory';
import './About.css';

export default class About extends Component {
  render() {
    const history = createHistory();
    return (
      <div className="about">
        <AppToolbar onClick={history.goBack} />
        <h3>About</h3>
      </div>
    );
  }
}
