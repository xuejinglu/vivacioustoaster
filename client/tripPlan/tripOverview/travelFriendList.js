import React from 'react';
import { connect } from 'react-redux';
import TravelFriendItem from './travelFriendItem';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import DropDownMenu from 'material-ui/lib/DropDownMenu/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ContentAddCircle
from 'material-ui/lib/svg-icons/content/add-circle';
import ContentRemoveCircle
from 'material-ui/lib/svg-icons/content/remove-circle';
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
  <div>

    <List>
      {travelFriends.map(friend =>
        <TravelFriendItem key={ friend.id } {...friend} />
      )}
    </List>
    <ListItem primaryText={listToggle ? 'Hide list' : 'Add more friends!'}
      leftAvatar={
        listToggle ?
          <ContentRemoveCircle color='#00bcd4' hoverColor='red'
            style= {{ width: '2em', height: '2em', marginTop: '4px', marginLeft: '5px' }}
          /> :
          <ContentAddCircle color='#00bcd4' hoverColor='green'
            style= {{ width: '2em', height: '2em', marginTop: '4px', marginLeft: '5px' }}
          />
        }
      style={{ marginBottom: '-10px' }}
      onClick={() => onClickToggleList() }
    />

    <List id="moreFriendsList"
      style={{ visibility: listToggle ? 'visible' : 'hidden' }}
    >

      { friends.filter(friend => {
        let needsInvite = true;
        travelFriends.forEach(travelFriend => {
          if (travelFriend.name === friend.name) {
            needsInvite = false;
          }
        });
        return needsInvite;
      })
      .map(friend =>
        <FriendItem className="friendsItems"
          key={ friend.id } {...friend}
          onClick={ () => onFriendClick(friend.id) }
        />)
      }

      <ListItem primaryText="Add these friends!"
        onClick={ () => onClickAddFriends(addedFriends, trip.id) }
      />
    </List>
  </div>
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
