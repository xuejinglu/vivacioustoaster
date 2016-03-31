import React from 'react';
import QueryItem from './queryItem';
import { connect } from 'react-redux';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import { save, toggleEvent, nextQuery, updateEvents, reset } from './queryActions';
import { Map } from 'immutable';
import List from 'material-ui/lib/lists/list';
import _ from 'lodash';
import { push } from 'react-router-redux';
import { clearDest } from '../tripPlan/dest/destActions';

const mapStateToProps = state => ({
  destinations: state.home.get('destinations'),
  tripType: state.home.get('tripType'),
  friends: state.friend.get('friends').filter(friend =>
    friend.addedToTrip),
  events: state.query.get('events'),
  trip: state.tripPlan.selectedTrip,
  dest: state.tripPlan.dest.get('destinations'),
  currPage: state.query.get('currPage'),
  destId: state.tripPlan.dest.get('key'),
});

const mapDispatchToProps = dispatch => ({
  onClickSave: (destinations, tripType, friends, events, goNext) =>
    dispatch(save(destinations, tripType, friends, events, goNext)),
  onClickToggle: event => dispatch(toggleEvent(event)),
  onClickUpdate: (events, trip, goNext, destId) => dispatch(updateEvents(events, trip, goNext, destId)),// eslint-disable-line
  onNextQuery: () => dispatch(nextQuery()),
  goNext: (name) => dispatch(push(name)),
  onClickReset: () => dispatch(reset()),
});

let QueryList = ({ destinations, tripType, onClickSave, friends, events, onClickToggle, currPage, onNextQuery, onNextEvents, goNext, trip, onClickUpdate, dest, currEvents, destId, onClickReset }) => ( // eslint-disable-line
  <div>
    Choose the places you want to go!
  <List>
      { events[currPage].map(event =>
        <QueryItem key={ event.id } { ...event }
          eventToggle={ () => onClickToggle(event) }
        />
      )}
  </List>
  <Link to="tag"><NavigationArrowBack /></Link>
  <NavigationArrowForward onClick={ () => {
    if (trip.id === undefined) {
      onNextQuery();
      if (currPage === destinations.length - 1) {
        onClickSave(destinations, tripType, friends, events, goNext);
        onClickReset();
      }
    } else {
      onClickUpdate(events, dest, goNext, destId);
    }}}
  />
  </div>
);

QueryList.propTypes = {
  destinations: React.PropTypes.array,
  tripType: React.PropTypes.string,
  friends: React.PropTypes.array,
  onClickSave: React.PropTypes.func,
  onClickToggle: React.PropTypes.func,
  events: React.PropTypes.array,
  trip: React.PropTypes.object,
  onClickUpdate: React.PropTypes.func,
  dest: React.PropTypes.array,
  currPage: React.PropTypes.number,
  onNextQuery: React.PropTypes.func,
  goNext: React.PropTypes.func,
  destId: React.PropTypes.number,
  onClickReset: React.PropTypes.func,
};

QueryList = connect(mapStateToProps, mapDispatchToProps)(QueryList);
export default QueryList;
