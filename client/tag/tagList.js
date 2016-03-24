import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'material-ui';
import { Link } from 'react-router';
import { toggleTag, startSearch } from './tagActions';
import { push } from 'react-router-redux';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

const mapDispatchToProps = dispatch => ({
  onToggleTag: (tag) => dispatch(toggleTag(tag)),
  onStartSearch: (goNext) => dispatch(startSearch(goNext)),
  goNext: (name) => dispatch(push(name)),
});

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 1000,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: '../assets/romance.jpg',
    title: 'Romance',
  },
  {
    img: '../assets/thrill.jpg',
    title: 'Thrill',
  },
  {
    img: '../assets/relaxation.jpg',
    title: 'Relaxation',
  },
  {
    img: '../assets/food.jpg',
    title: 'Food',
  },
  {
    img: '../assets/family.jpg',
    title: 'Family',
  },
  {
    img: '../assets/outdoor.jpg',
    title: 'Outdoor',
  },
  {
    img: '../assets/culture.jpg',
    title: 'Culture & Landmarks',
  },
  {
    img: '../assets/nightlife.jpg',
    title: 'Night Life',
  },
  {
    img: '../assets/shopping.jpg',
    title: 'Shopping',
  },
];

let TagList = ({ onToggleTag, onStartSearch, goNext }) => (
  <div style={styles.block}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {tilesData.map(tile => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<Checkbox onClick={() => onToggleTag(tile.title)} />}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  <Link to="friend"><NavigationArrowBack /></Link>
  <NavigationArrowForward onClick={() => {
    onStartSearch(goNext);
  }}
  />
  </div>
);

TagList.propTypes = {
  onToggleTag: React.PropTypes.func.isRequired,
  onStartSearch: React.PropTypes.func.isRequired,
  routeChange: React.PropTypes.object.isRequired,
  goNext: React.PropTypes.func.isRequired,
};

TagList = connect(null, mapDispatchToProps)(TagList);
export default TagList;

