import React from 'react';
import { connect } from 'react-redux';
import EventItem from './eventItem';
import List from 'material-ui/lib/lists/list';

const mapStateToProps = state => ({
  events: state.tripPlan.event.get('events'),
});

let EventList = ({ destIdx, events }) => (
  <div>
    <List>
      {events.get(destIdx).map(event =>
        <EventItem key={ event.id } {...event} />
      )}
    </List>
  </div>
);

EventList.propTypes = {
  events: React.PropTypes.array.isRequired,
  destIdx: React.PropTypes.number.isRequired,
};

EventList = connect(mapStateToProps)(EventList);

export default EventList;
