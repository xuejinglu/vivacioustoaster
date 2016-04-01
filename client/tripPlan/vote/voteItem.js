import React from 'react';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ThumbUp from 'material-ui/lib/svg-icons/action/thumb-up';

const VoteItem = ({ key, userId, eventId }) => (
  <FloatingActionButton mini onClick={voteOn}>
    <ThumbUp />
  </FloatingActionButton>
);

EventItem.propTypes = {
  key: React.PropTypes.number,
  userId: React.PropTypes.number,
  eventId: React.PropTypes.number,
};

export default VoteItem;
