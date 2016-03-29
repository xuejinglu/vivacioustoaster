import React from 'react';
import QueryItem from './queryItem';
import { connect } from 'react-redux';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import { save, toggleEvent, updateEvents } from './queryActions';
import { Map } from 'immutable';
import List from 'material-ui/lib/lists/list';
import _ from 'lodash';

const mapStateToProps = state => ({
  destinations: state.home.get('destinations'),
  tripType: state.home.get('tripType'),
  friends: state.friend.get('friends').filter(friend =>
    friend.addedToTrip),
  events: state.query.get('events'),
  trip: state.tripPlan.selectedTrip,
  dest: state.tripPlan.dest.get('destinations'),
});

const mapDispatchToProps = dispatch => ({
  onClickSave: (destinations, tripType, friends, events) =>
    dispatch(save(destinations, tripType, friends, events)),
  onClickToggle: event => dispatch(toggleEvent(event)),
  onClickUpdate: (events, trip) => dispatch(updateEvents(events, trip)),
});

let QueryList = ({ destination, tripType, onClickSave, friends, events, onClickToggle, trip, onClickUpdate, dest }) => ( // eslint-disable-line
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
  <Link to="tripPlan"><NavigationArrowForward onClick={ () => {
    if (trip.id === undefined) {
      onClickSave(destination, tripType, friends, events);
    } else {
      onClickUpdate(events, dest);
    }
  }}
  />
  </Link>
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
};

QueryList = connect(mapStateToProps, mapDispatchToProps)(QueryList);
export default QueryList;
