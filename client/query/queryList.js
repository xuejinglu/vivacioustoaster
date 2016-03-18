import React from 'react';
import QueryItem from './queryItem';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';

const QueryList = () => (
  <div>
  we are on QueryList page!
  <QueryItem />
  <Link to="tag"><NavigationArrowBack /></Link>
  <Link to="tripPlan"><NavigationArrowForward /></Link>
  </div>
);

export default QueryList;
