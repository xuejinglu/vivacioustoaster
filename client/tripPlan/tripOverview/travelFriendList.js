import React from 'react';
import { connect } from 'react-redux';
import TravelFriendItem from './travelFriendItem';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import DropDownMenu from 'material-ui/lib/DropDownMenu/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FriendItem from '../../friend/friendItem';
import Select from 'react-select';
import { toggleList } from './travelFriendActions';
import { toggleAddFriend } from '../../friend/friendActions';

const mapStateToProps = state => ({
  travelFriends: state.tripPlan.tripOverview.get('travelFriends'),
  friends: state.friend.get('friends'),
  listToggle: state.tripPlan.tripOverview.get('showList'),
});

const mapDispatchToProps = dispatch => ({
  onClickToggleList: () => dispatch(toggleList()),
  onFriendClick: id => dispatch(toggleAddFriend(id)),
});

let TravelFriendList = ({ travelFriends, friends, listToggle, onClickToggleList, onFriendClick }) => (
  <div>
     <List>
      {travelFriends.map(friend =>
        <TravelFriendItem key={ friend.id } {...friend} />
      )}
      </List>
     <ListItem primaryText={listToggle ? "Hide list" : "Add more friends!"} className="addFriendsButton"
      leftAvatar={<Avatar src={listToggle ? 'http://www.aisletracker.com/afc/images/icons/red_minus.png' : '../../assets/add.png'}
        style={{ width: '1em', height: '1em', marginTop: '7px', left: '5px' }}
      />}
      style={{ marginBottom: '-10px' }}
      onClick={() => onClickToggleList() }
    />
    <List id="moreFriendsList"
      style={{
        visibility: listToggle ? 'visible' : 'hidden',
      }}
    >
      {friends.map(friend =>
        <FriendItem className="friendsItems"
          key={ friend.id } {...friend}
          onClick={ () => onFriendClick(friend.id) } />)}
      <ListItem primaryText="Add these friends!"
      onClick={ () => {console.log('TODO: add additional friends')} }
      />
    </List>
  </div>
);

TravelFriendList.propTypes = {
  travelFriends: React.PropTypes.object.isRequired,
  friends: React.PropTypes.object.isRequired,
  listToggle: React.PropTypes.bool.isRequired,
  onClickToggleList: React.PropTypes.func.isRequired,
  onFriendClick: React.PropTypes.func.isRequired,
};

TravelFriendList = connect(mapStateToProps, mapDispatchToProps)(TravelFriendList);


export default TravelFriendList;
