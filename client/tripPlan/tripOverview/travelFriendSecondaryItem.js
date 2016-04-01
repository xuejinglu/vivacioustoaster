import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import ListItem from 'material-ui/lib/lists/list-item';

const TravelFriendSecondaryItem = ({ key, name, picUrl }) => (
  <div className="tooltip">
    <Avatar
      src={picUrl}
      children={<span className="tooltip-text">{name}</span>}
    />
  </div>
);

TravelFriendSecondaryItem.propTypes = {
  key: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  picUrl: React.PropTypes.string.isRequired,
};

export default TravelFriendSecondaryItem;
