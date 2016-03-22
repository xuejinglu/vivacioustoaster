import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import ListItem from 'material-ui/lib/lists/list-item';

const TravelFriendItem = ({ key, name, picUrl }) => (
  <ListItem
    primaryText={name}
    leftAvatar={<Avatar src={picUrl} />}
  />
);

TravelFriendItem.propTypes = {
  key: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  picUrl: React.PropTypes.string.isRequired,
};

export default TravelFriendItem;
