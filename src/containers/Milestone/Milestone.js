import React, { Component } from 'react';
import AppToolbar from '../../components/AppToolbar/AppToolbar';
import createHistory from 'history/createBrowserHistory';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import milestones from './milestones';
import './Milestone.css';


const styles = theme => ({
  image : {
    background: '#ffbdce',
    width: 400,
    height: 400,
    'margin-top': 50,
    'margin-left': 'auto',
	  'margin-right': 'auto',
	  display: 'block',
  },
  text : {
    'text-align': 'center',
  },
});

class Milestone extends Component {
  render() {
    const id = this.props.match.params.id ? Number(this.props.match.params.id) : 0;
    const classes = this.props.classes;
    const history = createHistory();
    return (
      <div className="milestone">
        <AppToolbar onClick={history.goBack} />
        <Avatar
          src={milestones[id].img}
          className={classes.image}
        />
        <p className={classes.text}>{milestones[id].title}</p>
      </div>
    );
  }
}

export default withStyles(styles)(Milestone);
