import React from 'react';
import { connect } from 'react-redux';
import EventItem from './eventItem';
import List from 'material-ui/lib/lists/list';

let EventList = ({ events }) => (
  <div>
    <List>
      {events.map(event =>
        <EventItem key={ event.id } {...event} />
      )}
    </List>
  </div>
);

EventList.propTypes = {
  events: React.PropTypes.array.isRequired,
};

EventList = connect()(EventList);

export default EventList;
