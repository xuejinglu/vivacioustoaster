import React from 'react';
import QueryItem from './queryItem';
import { connect } from 'react-redux';
import NavigationArrowForward
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-forward';
import NavigationArrowBack
from '../../node_modules/material-ui/lib/svg-icons/navigation/arrow-back';
import { Link } from 'react-router';
import { save } from './queryActions';
import { Map, get } from 'immutable';

const mapStateToProps = (state) => ({
  destination: [{
    name: state.home.get('destination').get('name'),
    startDate: state.home.get('destination').get('startDate'),
    endDate: state.home.get('destination').get('endDate'),
  }],
  tripType: state.home.get('tripType'),
});

const mapDispatchToProps = (dispatch) => ({ onClickSave: (destination, tripType) => {
  dispatch(save(destination, tripType));
},
});

let QueryList = ({ destination, tripType, onClickSave }) => (
  <div>
  we are on QueryList page!
  <QueryItem />
  <Link to="tag"><NavigationArrowBack /></Link>
  <Link to="tripPlan"><NavigationArrowForward onClick={ () =>
    onClickSave(destination, tripType) }
  />
  </Link>
  </div>
);

QueryList.propTypes = {
  destination: React.PropTypes.array,
  tripType: React.PropTypes.string,
  onClickSave: React.PropTypes.func,
};

QueryList = connect(mapStateToProps, mapDispatchToProps)(QueryList);
export default QueryList;
