import React from 'react';
import { connect } from 'react-redux';
import EventItem from './eventItem';
import List from 'material-ui/lib/lists/list';
import CardTitle from 'material-ui/lib/card/card-title';

const mapStateToProps = state => ({
  events: state.tripPlan.event.get('events'),
  destinations: state.tripPlan.dest.get('destinations'),
});

let EventList = ({ destinations, destIdx, events }) => (
  <div>
    <CardTitle
      title={`Places To See In ${destinations[destIdx].location}`}
      style={{ textAlign: 'center' }}
    />
    <List>
      {events.get(destIdx).map(event =>
        <EventItem key={ event.id } {...event} />
      )}
    </List>
  </div>
);

EventList.propTypes = {
  destinations: React.PropTypes.object.isRequired,
  events: React.PropTypes.object.isRequired,
  destIdx: React.PropTypes.number.isRequired,
};

EventList = connect(mapStateToProps)(EventList);

export default EventList;
