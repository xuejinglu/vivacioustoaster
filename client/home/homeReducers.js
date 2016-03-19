import { CHANGE_STARTDATE, CHANGE_ENDDATE } from './homeActions';

const initialState = {
  startDate: null,
  endDate: null,
  destination: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_STARTDATE':
      return Object.assign({}, state, {
        startDate: action.date,
      });
    case 'CHANGE_ENDDATE':
      return Object.assign({}, state, {
        endDate: action.date,
      });
    default:
      return state;
  }
};
