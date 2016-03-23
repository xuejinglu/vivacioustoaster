import { combineReducers } from 'redux';
import Immutable from 'immutable';
import { SELECT_TRIP } from './tripPlanActions';
import dest from './dest/destReducers';
import event from './event/eventReducers';
import tripOverview from './tripOverview/travelFriendReducers';

// const initialState = Immutable.Map();

const selectedTrip = (state = {}, action) => {
  switch (action.type) {
    case SELECT_TRIP:
      return action.payload.trip;
    default:
      return state;
  }
};

const tripPlanReducer = combineReducers({
  selectedTrip,
  dest,
  event,
  tripOverview,
});

export default tripPlanReducer;
