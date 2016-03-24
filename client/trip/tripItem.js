import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import List from 'material-ui/lib/lists/list';

const TripItem = ({ key, name, tripType, destinations, users }) => (
  <div>
    <ListItem
      primaryText={ name }
      secondaryText={ tripType }
    />
    <List>
      {users.map(user =>
        <ListItem primaryText={ user.name } />
      )}
    </List>
    <List>
      {destinations.map(destination =>
        <ListItem primaryText={ destination.location } />
      )}
    </List>
  </div>
);

TripItem.propTypes = {
  key: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  tripType: React.PropTypes.string.isRequired,
  destinations: React.PropTypes.array.isRequired,
  users: React.PropTypes.array.isRequired,
};

export default TripItem;
