import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { IconButton } from 'material-ui';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import { toggleTag } from './tagActions';
import { startSearch } from '../query/queryActions';
import { push } from 'react-router-redux';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

const mapStateToProps = state => ({
  tags: state.tag.get('tags'),
  chosen: state.tripPlan.dest.get('destinations'),
  destinations: state.home.get('destinations'),
  currPage: state.query.get('currPage'),
  destId: state.tripPlan.dest.get('key'),
});

const mapDispatchToProps = dispatch => ({
  onToggleTag: (tag) => dispatch(toggleTag(tag)),
  onStartSearch: (goNext, tags, destinations, currPage) =>
    dispatch(startSearch(goNext, tags, destinations, currPage)),
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

let TagList = ({ onToggleTag, onStartSearch, goNext, tags, destinations, chosen, currPage, destId }) => ( // eslint-disable-line
  <div style={styles.block}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      {tags.map(tag => (
        <GridTile
          key={tag.img}
          title={tag.name}
          actionIcon=
            {<IconButton onClick={() => onToggleTag(tag.name)}>
              <StarBorder color="white" />
            </IconButton>}
          actionPosition={tag.addedToTrip ? 'left' : 'right'}
        >
          <img src={tag.img} />
        </GridTile>
      ))}
    </GridList>
  <Link to="friend"><NavigationArrowBack /></Link>
  <NavigationArrowForward onClick={() => {
    if (chosen.size === 0) {
      onStartSearch(goNext, tags, destinations, currPage);
    } else {
      onStartSearch(goNext, tags, [chosen[destId]], 0, destId);
    }
  }}
  />
  </div>
);

TagList.propTypes = {
  onToggleTag: React.PropTypes.func.isRequired,
  onStartSearch: React.PropTypes.func.isRequired,
  routeChange: React.PropTypes.object.isRequired,
  goNext: React.PropTypes.func.isRequired,
  tags: React.PropTypes.array.isRequired,
  destinations: React.PropTypes.array.isRequired,
  chosen: React.PropTypes.array.isRequired,
  currPage: React.PropTypes.number.isRequired,
  destId: React.PropTypes.any.isRequired,
};

TagList = connect(mapStateToProps, mapDispatchToProps)(TagList);
export default TagList;
