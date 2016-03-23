import React from 'react';
import { connect } from 'react-redux';
import { Checkbox } from 'material-ui';
import { Link } from 'react-router';
import { toggleTag, startSearch } from './tagActions';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';

const mapDispatchToProps = dispatch => ({
  onToggleTag: (tag) => dispatch(toggleTag(tag)),
  onStartSearch: (searchString) => dispatch(startSearch(searchString)),
});

let TagList = ({ onToggleTag, onStartSearch }) => (
  <div>
  <Checkbox label="Romance" onCheck={() => {
    onToggleTag('Romance');
  }}
  />
  <Checkbox label="Thrill" onCheck={() => {
    onToggleTag('Thrill');
  }}
  />
  <Checkbox label="Relaxation" onCheck={() => {
    onToggleTag('Relaxation');
  }}
  />
  <Checkbox label="Food" onCheck={() => {
    onToggleTag('Food');
  }}
  />
  <Checkbox label="Family" onCheck={() => {
    onToggleTag('Family');
  }}
  />
  <Checkbox label="Outdoor" onCheck={() => {
    onToggleTag('Outdoor');
  }}
  />
  <Checkbox label="Culture" onCheck={() => {
    onToggleTag('Culture');
  }}
  />
  <Checkbox label="Landmarks" onCheck={() => {
    onToggleTag('Landmarks');
  }}
  />
  <Link to="friend"><NavigationArrowBack /></Link>
  <Link to="query"><NavigationArrowForward onClick={() => {
    onStartSearch();
  }}
  />
  </Link>
  </div>
);

TagList.propTypes = {
  onToggleTag: React.PropTypes.func.isRequired,
  onStartSearch: React.PropTypes.func.isRequired,
};

TagList = connect(null, mapDispatchToProps)(TagList);
export default TagList;

