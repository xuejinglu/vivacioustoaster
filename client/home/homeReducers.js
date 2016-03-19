import { CHANGE_STARTDATE, CHANGE_ENDDATE } from './homeActions';

const initialState = {
  startDate: null,
  endDate: null,
  destination: null,
  tripType: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STARTDATE':
      return Object.assign({}, state, {
        startDate: action.payload.date,
      });
    case 'CHANGE_ENDDATE':
      return Object.assign({}, state, {
        endDate: action.payload.date,
      });
    case 'CHANGE_TRIPTYPE':
      return Object.assign({}, state, {
        tripType: action.payload.tripType,
      });
    default:
      return state;
  }
};
