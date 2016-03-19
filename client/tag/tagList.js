import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'material-ui';
import { Link } from 'react-router';
import { toggleTag } from './tagActions';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';

let TagList = ({ dispatch }) => (
  <div>
  <Checkbox label="Romance" onCheck={() => {
    dispatch(toggleTag('Romance'));
  }}
  />
  <Checkbox label="Thrill" onCheck={() => {
    dispatch(toggleTag('Thrill'));
  }}
  />
  <Checkbox label="Relaxation" onCheck={() => {
    dispatch(toggleTag('Relaxation'));
  }}
  />
  <Checkbox label="Food" onCheck={() => {
    dispatch(toggleTag('Food'));
  }}
  />
  <Checkbox label="Family" onCheck={() => {
    dispatch(toggleTag('Family'));
  }}
  />
  <Checkbox label="Outdoor" onCheck={() => {
    dispatch(toggleTag('Outdoor'));
  }}
  />
  <Checkbox label="Culture" onCheck={() => {
    dispatch(toggleTag('Culture'));
  }}
  />
  <Checkbox label="Landmarks" onCheck={() => {
    dispatch(toggleTag('Landmarks'));
  }}
  />
  <Link to="friend"><NavigationArrowBack /></Link>
  <Link to="query"><NavigationArrowForward /></Link>
  </div>
);

TagList.propTypes = {
  dispatch: React.PropTypes.element,
};

TagList = connect()(TagList);
export default TagList;

