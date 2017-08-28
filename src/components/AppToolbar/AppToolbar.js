import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import './AppToolbar.css';

const AppToolbar = props => (
  <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onClick={props.onClick}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className="AppToolbar-flex">
            Totspace
          </Typography>
          <Button color="contrast">Summary</Button>
        </Toolbar>
      </AppBar>
    </div>
);

export default AppToolbar;
