import React from 'react';
import { connect } from 'react-redux';
import TravelFriendItem from './travelFriendItem';
import List from 'material-ui/lib/lists/list';

const mapStateToProps = state => ({
  travelFriends: state.tripPlan.tripOverview.get('travelFriends'),
});

let TravelFriendList = ({ travelFriends }) => (
  <div>
    <List>
      {travelFriends.map(friend =>
        <TravelFriendItem key={ friend.id } {...friend} />
      )}
    </List>
  </div>
);

TravelFriendList.propTypes = {
  travelFriends: React.PropTypes.object.isRequired,
};

TravelFriendList = connect(mapStateToProps)(TravelFriendList);


export default TravelFriendList;
