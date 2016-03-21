import { Map } from 'immutable';
import { CHANGE_STARTDATE, CHANGE_ENDDATE, CHANGE_DESTINATION, CHANGE_TRIPTYPE }
from './homeActions';

const initialState = Map({
  destination: Map({
    name: null,
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
      return state.setIn(['destination', 'name'], action.payload.value);
    case 'CHANGE_TRIPTYPE':
      return state.set('tripType', action.payload.tripType);
    default:
      return state;
  }
};
