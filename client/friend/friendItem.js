import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import ListItem from 'material-ui/lib/lists/list-item';

const FriendItem = ({ key, name, picUrl, addedToTrip, onClick }) => (
  <ListItem leftAvatar={<Avatar src={picUrl} />} onClick={onClick} >{name}</ListItem>
);

FriendItem.propTypes = {
  key: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  picUrl: React.PropTypes.string.isRequired,
  addedToTrip: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default FriendItem;
