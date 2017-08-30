import React, { Component } from 'react';
import AppToolbar from '../../components/AppToolbar/AppToolbar';
import createHistory from 'history/createBrowserHistory';
import './Milestone.css';

export default class Milestone extends Component {
  render() {
    const history = createHistory();
    return (
      <div className="milestone">
        <AppToolbar onClick={history.goBack} />
      </div>
    );
  }
}
