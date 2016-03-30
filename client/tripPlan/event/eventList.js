import React from 'react';
import { connect } from 'react-redux';
import EventItem from './eventItem';
import List from 'material-ui/lib/lists/list';
import CardTitle from 'material-ui/lib/card/card-title';

const mapStateToProps = state => ({
  events: state.tripPlan.event.get('events'),
  votes: state.tripPlan.vote.get('votes'),
  destinations: state.tripPlan.dest.get('destinations'),
});

let EventList = ({ destinations, destIdx, events, votes }) => (
  <div>
    <CardTitle
      title={`Places To See In ${destinations[destIdx].location}`}
      style={{ textAlign: 'center' }}
    />
    <List>
      {events.get(destIdx).map(event => {
        const eventVotes = votes.filter(vote => vote.eventId === event.id);
        return <EventItem key={ event.id } {...event} votes={eventVotes} />;
      })}
    </List>
  </div>
);

EventList.propTypes = {
  destinations: React.PropTypes.object.isRequired,
  events: React.PropTypes.array.isRequired,
  votes: React.PropTypes.array.isRequired,
  destIdx: React.PropTypes.number.isRequired,
};

EventList = connect(mapStateToProps)(EventList);

export default EventList;
