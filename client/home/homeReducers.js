import { CHANGE_STARTDATE, CHANGE_ENDDATE } from './homeActions';

const initialState = {
  destination: {
    name: null,
    startDate: null,
    endDate: null,
  },
  tripType: 'Group',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STARTDATE':
      return Object.assign({}, state, {
        destination: Object.assign({}, state.destination, {
          startDate: action.payload.date,
        }),
      });
    case 'CHANGE_ENDDATE':
      return Object.assign({}, state, {
        destination: Object.assign({}, state.destination, {
          endDate: action.payload.date,
        }),
      });
    case 'CHANGE_TRIPTYPE':
      return Object.assign({}, state, {
        tripType: action.payload.tripType,
      });
    default:
      return state;
  }
};
