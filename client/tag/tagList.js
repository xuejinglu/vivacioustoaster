import React from 'react';
import TagItem from './tagItem';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import { Link } from 'react-router';

const TagList = () => (
  <div>
  we are on TagList page!
  <TagItem />
  <Link to="query"><NavigationArrowForward /></Link>
  </div>
);

export default TagList;
