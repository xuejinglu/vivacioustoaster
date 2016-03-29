import React from 'react';
import { connect } from 'react-redux';
import TravelFriendItem from './travelFriendItem';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';
import DropDownMenu from 'material-ui/lib/DropDownMenu/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import FriendItem from '../../friend/friendItem';

const mapStateToProps = state => ({
  travelFriends: state.tripPlan.tripOverview.get('travelFriends'),
  friends: state.friend.get('friends'),
  showFriends: true,
  listStyle: {visibility: 'visibile'},
});

let TravelFriendList = ({ travelFriends, friends, showFriends, listStyle }) => (
  <div>
    <List>
      {travelFriends.map(friend =>
        <TravelFriendItem key={ friend.id } {...friend} />
      )}
      <Avatar src={'../../assets/add.png'}
        onClick={ () => (()=> {
          console.log('LIST STYLE IS STARTING AT ', listStyle);
          if (showFriends) {
            listStyle = {visibility: 'hidden'};
            showFriends = false;
            console.log('LIST STYLE IS NOW ', listStyle);
          } else {
            listStyle = {visibility: 'visibile'};
            showFriends = true;
            console.log('LIST STYLE IS NOW ', listStyle);
          };
        })()}
      />
      <List id="moreFriendsList" style={listStyle}
      >
        {friends.map(friend =>
          <FriendItem className="friendsItems" key={ friend.id } {...friend}
            style={listStyle}
            onClick={() =>{ console.log('clicked!');}} />
        )}
      </List>
    </List>
  </div>
);

TravelFriendList.propTypes = {
  listStyle: React.PropTypes.object.isRequired,
  travelFriends: React.PropTypes.object.isRequired,
  friends: React.PropTypes.object.isRequired,
  showFriends: React.PropTypes.bool.isRequired,
};

TravelFriendList = connect(mapStateToProps)(TravelFriendList);


export default TravelFriendList;
