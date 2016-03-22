import { combineReducers } from 'redux';
import dest from './dest/destReducers';
import event from './event/eventReducers';
import tripOverview from './tripOverview/travelFriendReducers';

const tripPlanReducer = combineReducers({
  dest,
  event,
  tripOverview,
});

export default tripPlanReducer;
