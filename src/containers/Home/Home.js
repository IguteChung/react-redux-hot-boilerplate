import React, { Component } from 'react';
import AppToolbar from '../../components/AppToolbar/AppToolbar';
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
  }
  render() {
    return (
      <div className="home">
        <AppToolbar onClick={() => { this.setState({ open: true}); }} />
        <AppDrawer open={this.state.open}   />
      </div>
    );
  }
}
