import { Map } from 'immutable';
import { CHANGE_STARTDATE, CHANGE_ENDDATE, CHANGE_DESTINATION } from './homeActions';

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
      return state.set('destination',
        state.destination.set('startDate', action.payload.date));
    case 'CHANGE_ENDDATE':
      return state.set('destination',
        state.destination.set('endDate', action.payload.date));
    case 'CHANGE_DESTINATION':
      const newDest = state.home.destination.set('name', action.payload.value);
      return state.set('destination', newDest);
    case 'CHANGE_TRIPTYPE':
      return state.set('tripType', action.tripType);
    default:
      return state;
  }
};
