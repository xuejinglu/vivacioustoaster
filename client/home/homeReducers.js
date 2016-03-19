import { CHANGE_STARTDATE, CHANGE_ENDDATE, CHANGE_DESTINATION } from './homeActions';

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
    case 'CHANGE_DESTINATION':
      return Object.assign({}, state, {
        destination: Object.assign({}, state.destination, {
          name: action.payload.value,
        }),
      });
    default:
      return state;
  }
};
