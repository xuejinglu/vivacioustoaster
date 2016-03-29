import React from 'react';
import QueryItem from './queryItem';
import { connect } from 'react-redux';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import { save, toggleEvent, nextQuery, nextEvents, updateEvents } from './queryActions';
import { Map } from 'immutable';
import List from 'material-ui/lib/lists/list';
import _ from 'lodash';
import { push } from 'react-router-redux';

const mapStateToProps = state => ({
  destinations: state.home.get('destinations'),
  tripType: state.home.get('tripType'),
  friends: state.friend.get('friends').filter(friend =>
    friend.addedToTrip),
  events: state.query.get('events'),
  trip: state.tripPlan.selectedTrip,
  dest: state.tripPlan.dest.get('destinations'),
  currEvents: state.query.get('currEvents'),
  currPage: state.query.get('currPage'),
});

const mapDispatchToProps = dispatch => ({
  onClickSave: (destinations, tripType, friends, events, goNext) =>
    dispatch(save(destinations, tripType, friends, events, goNext)),
  onClickToggle: event => dispatch(toggleEvent(event)),
  onClickUpdate: (events, trip) => dispatch(updateEvents(events, trip)),
  onNextQuery: () => dispatch(nextQuery()),
  onNextEvents: (currPage) => dispatch(nextEvents(currPage)),
  goNext: (name) => dispatch(push(name)),
});

let QueryList = ({ destinations, tripType, onClickSave, friends, events, onClickToggle, currPage, onNextQuery, onNextEvents, goNext, trip, onClickUpdate, dest, currEvents }) => ( // eslint-disable-line
  <div>
    Choose the places you want to go!
  <List>
  {events.map(event =>
        <QueryItem key={ event.id } { ...event }
          eventToggle={ () => onClickToggle(event) }
        />
      )}
  </List>
  <Link to="tag"><NavigationArrowBack /></Link>
  <NavigationArrowForward onClick={ () => {
    if (trip.id === undefined) {
      onNextQuery();
      if (currPage === destinations.length) {
        onClickSave(destinations, tripType, friends, events, goNext);
      } else {
        onNextEvents(currPage);
      }  
    } else {
      onClickUpdate(events, dest);
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
  onNextEvents: React.PropTypes.func,
  goNext: React.PropTypes.func,
  currEvents: React.PropTypes.array,
};

QueryList = connect(mapStateToProps, mapDispatchToProps)(QueryList);
export default QueryList;
