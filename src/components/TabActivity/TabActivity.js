import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import ActivityGrid from '../ActivityGrid/ActivityGrid';

function TabContainer(props) {
  return (
    <div style={{ padding: 20 }}>
      {props.children}
    </div>
  );
}

export default class TabActivity extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            {
              [...Array(12)].map((_, index) => (
                <Tab key={index} label={`Month ${index}`} />
              ))
            }
          </Tabs>
        </AppBar>
        <TabContainer><ActivityGrid /></TabContainer>
      </div>
    );
  }
}
