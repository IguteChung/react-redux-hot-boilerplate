import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import './AppDrawer.css';

const sideList = (
        <List className="AppDrawer-list" disablePadding>
        <Link to="/milestone">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Management" />
        </ListItem>
        </Link>
        <Link to="/milestone">
        <ListItem button>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="Reminder" />
        </ListItem>
        </Link>
        <Link to="/milestone">
        <ListItem button>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Setting" />
        </ListItem>
        </Link>
        <Link to="/milestone">
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        </Link>
        </List>
    );

export default class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      open: props.open,
    });
  }

  render() {
    return (
      <Drawer
        open={this.state.open}
        onRequestClose={this.props.onClosed}
        onClick={() => { this.setState({ open: false }); }}
      >
        {sideList}
      </Drawer>
    );
  }
}
