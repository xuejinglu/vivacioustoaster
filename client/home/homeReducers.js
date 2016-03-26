import { Map } from 'immutable';
import { CHANGE_STARTDATE, CHANGE_ENDDATE, CHANGE_DESTINATION, CHANGE_TRIPTYPE }
from './homeActions';

const initialState = Map({
  destination: Map({
    location: null,
    startDate: null,
    endDate: null,
  }),
  tripType: 'Group',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STARTDATE':
      return state.setIn(['destination', 'startDate'], action.payload.date);
    case 'CHANGE_ENDDATE':
      return state.setIn(['destination', 'endDate'], action.payload.date);
    case 'CHANGE_DESTINATION':
      return state.setIn(['destination', 'location'], action.payload.value);
    case 'CHANGE_TRIPTYPE':
      return state.set('tripType', action.payload.tripType);
    case 'CLEAR_DESTINATION':
      state = state.setIn(['destination', 'location'], null);
      state = state.setIn(['destination', 'startDate'], null);
      state = state.setIn(['destination', 'endDate'], null);
      state = state.set('tripType', 'Group');
      return state;
    default:
      return state;
  }
};
