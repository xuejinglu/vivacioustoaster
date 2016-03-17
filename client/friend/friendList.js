import React from 'react';
import FriendItem from './friendItem';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import { Link } from 'react-router';

const FriendList = () => (
  <div>
  we are on FriendList page!
  <FriendItem />
  <Link to="tag"><NavigationArrowForward /></Link>
  </div>
);

export default FriendList;
