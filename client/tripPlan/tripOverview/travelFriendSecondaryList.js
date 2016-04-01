import React from 'react';
import { connect } from 'react-redux';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Avatar from 'material-ui/lib/avatar';
import TravelFriendSecondaryItem from './travelFriendSecondaryItem';
import FriendItem from '../../friend/friendItem';
import { toggleList } from './travelFriendActions';
import { addFriends } from './travelFriendActions';
import { toggleAddFriend } from '../../friend/friendActions';

const mapStateToProps = state => ({
  travelFriends: state.tripPlan.tripOverview.get('travelFriends'),
  trip: state.tripPlan.selectedTrip,
  friends: state.friend.get('friends'),
  addedFriends: state.friend.get('friends').filter(friend => friend.addedToTrip),
  listToggle: state.tripPlan.tripOverview.get('showList'),
});

const mapDispatchToProps = dispatch => ({
  onClickToggleList: () => dispatch(toggleList()),
  onFriendClick: id => dispatch(toggleAddFriend(id)),
  onClickAddFriends: (friends, trip) => dispatch(addFriends(friends, trip)),
});

let TravelFriendList = ({ travelFriends, friends, listToggle, onClickToggleList, onFriendClick, addedFriends, trip, onClickAddFriends }) => ( // eslint-disable-line
  <Card>
    <CardText>
      <strong>Friends: </strong>
    </CardText>
    <div className="friendsRow">
      {travelFriends.map(friend =>
        <TravelFriendSecondaryItem key={ friend.id } {...friend} />
      )}
    </div>
  </Card>
);

TravelFriendList.propTypes = {
  travelFriends: React.PropTypes.object.isRequired,
  friends: React.PropTypes.object.isRequired,
  addedFriends: React.PropTypes.object.isRequired,
  trip: React.PropTypes.number.isRequired,
  listToggle: React.PropTypes.bool.isRequired,
  onClickToggleList: React.PropTypes.func.isRequired,
  onFriendClick: React.PropTypes.func.isRequired,
  onClickAddFriends: React.PropTypes.func.isRequired,
};

TravelFriendList = connect(mapStateToProps, mapDispatchToProps)(TravelFriendList);


export default TravelFriendList;
