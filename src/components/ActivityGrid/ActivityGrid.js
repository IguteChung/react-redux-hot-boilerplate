import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import tileData from './tileData';

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
  text : {
    'text-align': 'center',
  },
});

function ActivityGrid(props) {
  const classes = props.classes;

  return (
    <div className={classes.container}>
      <GridList cellHeight={260} cols={3} className={classes.gridList}>
        {tileData.map((tile, index) =>
          <GridListTile key={index}>
            <Link to="/milestone">
            <Avatar
              src={tile.img}
              className={classes.image}
            />
            </Link>
            <p className={classes.text}>{tile.title}</p>
          </GridListTile>,
        )}
      </GridList>
    </div>
  );
}

ActivityGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ActivityGrid);
