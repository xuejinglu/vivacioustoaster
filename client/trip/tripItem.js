import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

const TripItem = ({ key, name, tripType, destinations, users }) => (
  <ListItem
    primaryText={name}
  />
);

TripItem.propTypes = {
  key: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  tripType: React.PropTypes.string.isRequired,
  destinations: React.PropTypes.object.isRequired,
  users: React.PropTypes.object.isRequired,
};

export default TripItem;
