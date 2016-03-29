import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import ListItem from 'material-ui/lib/lists/list-item';

const QueryItem = ({ key, icon, name, address, rating, eventToggle, addedToDest }) => (
  <ListItem
    primaryText={name + ' rating:' + rating} // eslint-disable-line
    secondaryText={address}
    leftAvatar={<Avatar src={icon} />}
    onClick={eventToggle}
    style={{
      backgroundColor: addedToDest ? 'lightgrey' : 'white',
    }}
  />
);


QueryItem.propTypes = {
  key: React.PropTypes.string,
  icon: React.PropTypes.string,
  name: React.PropTypes.string,
  address: React.PropTypes.string,
  rating: React.PropTypes.number,
  eventToggle: React.PropTypes.func,
  addedToDest: React.PropTypes.bool,
};

export default QueryItem;
