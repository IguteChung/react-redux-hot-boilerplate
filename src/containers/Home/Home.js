import React, { Component } from 'react';
import AppToolbar from '../../components/AppToolbar/AppToolbar';
import AppDrawer from '../../components/AppDrawer/AppDrawer';
import TabActivity from '../../components/TabActivity/TabActivity';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
  }
  render() {
    const id = this.props.match.params.id ? Number(this.props.match.params.id) : 0;
    console.log('home ', this.props);
    return (
      <div className="home">
        <AppToolbar menu onClick={() => { this.setState({ open: true}); }} />
        <AppDrawer open={this.state.open} onClosed={() => this.setState({ open: false })}  />
        <TabActivity id={id} />
      </div>
    );
  }
}
