import { combineReducers } from 'redux';
import { SELECT_TRIP, CLEAR_STATES } from './tripPlanActions';
import dest from './dest/destReducers';
import event from './event/eventReducers';
import tripOverview from './tripOverview/travelFriendReducers';

const selectedTrip = (state = {}, action) => {
  switch (action.type) {
    case SELECT_TRIP:
      return action.payload.trip;
    default:
      return state;
  }
};

// combines subordinate reducers active on the 'tripPlan' page
const tripPlanReducer = combineReducers({
  selectedTrip,
  dest,
  event,
  tripOverview,
});

export default tripPlanReducer;
