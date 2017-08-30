import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import { CircularProgress } from 'material-ui/Progress';
import tileData from '../../containers/Milestone/milestones';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
  },
  image : {
    background: '#ffbdce',
    width: 200,
    height: 200,
    'margin-left': 'auto',
	  'margin-right': 'auto',
	  display: 'block',
    '&:hover': {
     width: 180,
     height: 180,
     background: 'rgba(255, 189, 206, 0.7)',
   },
  },
   imageselected : {
     background: '#9e9e9e',
     width: 200,
     height: 200,
     'margin-left': 'auto',
 	  'margin-right': 'auto',
 	  display: 'block',
     '&:hover': {
      width: 180,
      height: 180,
      background: '#424242',
    },
  },
  text : {
    'text-align': 'center',
  },
  progress : {
    position: 'absolute',
    top: 400,
    left: '50%',
    'margin-left': -50,
  },
});

class ActivityGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      id: props.id,
    }
    setTimeout(() => { this.setState({ loading: false }); }, 500);
  }

  componentWillReceiveProps(props) {
    console.log('wtf ', this.state.id, props.id);
    if (this.state.id === props.id) {
      return;
    }
    this.setState({
      loading: true,
      id: props.id,
    });
    setTimeout(() => { this.setState({ loading: false }); }, 500);
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.container}>
      {
        this.state.loading ?   <CircularProgress color="accent" className={classes.progress} size={100}/> :
        <GridList cellHeight={260} cols={3} className={classes.gridList}>
          {tileData.map((tile, index) =>
            <GridListTile key={index}>
              <Link to={`/milestone/${index}`}>
              <Avatar
                src={tile.img}
                className={index === this.state.id ? classes.imageselected : classes.image}
              />
              </Link>
              <p className={classes.text}>{`${this.state.id}: ${tile.title}`}</p>
            </GridListTile>
          )}
        </GridList>
      }
      </div>
    );
  }
}

ActivityGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityGrid);
