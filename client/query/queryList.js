import React from 'react';
import QueryItem from './queryItem';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import { Link } from 'react-router';

const QueryList = () => (
  <div>
  we are on QueryList page!
  <QueryItem />
  <Link to="tripPlan"><NavigationArrowForward /></Link>
  </div>
);

export default QueryList;
