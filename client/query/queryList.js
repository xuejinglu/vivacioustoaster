import React from 'react';
import QueryItem from './queryItem';
import { connect } from 'react-redux';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import { save } from './queryActions';
import { Map } from 'immutable';
import _ from 'lodash';

const mapStateToProps = (state) => ({
  destination: [{
    startDate: state.home.getIn(['destination', 'startDate']),
    endDate: state.home.getIn(['destination', 'endDate']),
    location: state.home.getIn(['destination', 'location']),
  }],
  tripType: state.home.get('tripType'),
  friends: state.friend.get('friends').filter((friend) =>
    friend.addedToTrip),
});

const mapDispatchToProps = (dispatch) => ({ onClickSave: (destination, tripType, friends) => {
  dispatch(save(destination, tripType, friends));
},
});

let QueryList = ({ destination, tripType, onClickSave, friends }) => (
  <div>
  we are on QueryList page!
  <QueryItem />
  <Link to="tag"><NavigationArrowBack /></Link>
  <Link to="tripPlan"><NavigationArrowForward onClick={ () =>
    onClickSave(destination, tripType, friends) }
  />
  </Link>
  </div>
);

QueryList.propTypes = {
  destination: React.PropTypes.object,
  tripType: React.PropTypes.string,
  friends: React.PropTypes.array,
  onClickSave: React.PropTypes.func,
};

QueryList = connect(mapStateToProps, mapDispatchToProps)(QueryList);
export default QueryList;
