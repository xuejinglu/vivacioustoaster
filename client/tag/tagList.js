import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { IconButton } from 'material-ui';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import { toggleTag, startLoad, endLoad } from './tagActions';
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
  loading: state.tag.get('loadingEvents'),
});

const mapDispatchToProps = dispatch => ({
  onToggleTag: tag => dispatch(toggleTag(tag)),
  onStartSearch: (goNext, tags, destinations, currPage) =>
    dispatch(startSearch(goNext, tags, destinations, currPage)),
  goNext: name => dispatch(push(name)),
  startLoadEvents: () => dispatch(startLoad()),
  endLoadEvents: () => dispatch(endLoad()),
});

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
};

let TagList = ({ onToggleTag, onStartSearch, goNext, tags, destinations, chosen, currPage, destId, startLoadEvents, endLoadEvents, loading }) => ( // eslint-disable-line
  <div style={styles.block}>
    <img src="../assets/spinning-globe.gif"
      style={{
        position: 'fixed',
        height: '10%',
        top: '42.5%',
        left: '48%',
        visibility: loading ? 'visible' : 'hidden',
      }}
    />
    <GridList
      cellHeight={200}
      style={{
        width: 500,
        height: 1000,
        overflowY: 'auto',
        marginBottom: 24,
        visibility: loading ? 'hidden' : 'visible',
      }}
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
  <NavigationArrowForward onClick={ () => {
    startLoadEvents();
    if (chosen.size === 0) {
      onStartSearch(goNext, tags, destinations, currPage)
      .then(() => endLoadEvents());
    } else {
      onStartSearch(goNext, tags, [chosen[destId]], 0, destId)
      .then(() => endLoadEvents());
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
  startLoadEvents: React.PropTypes.func.isRequired,
  endLoadEvents: React.PropTypes.func.isRequired,
  loading: React.PropTypes.bool.isRequired,
};

TagList = connect(mapStateToProps, mapDispatchToProps)(TagList);
export default TagList;
