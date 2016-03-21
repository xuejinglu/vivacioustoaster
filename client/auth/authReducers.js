import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from './authActions';
import { Map } from 'immutable';

const initialState = Map({
  user: null,
});

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  // change const to let whenever we start changing states
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetchingAuth: action.payload.isFetchingAuth,
        isAuthenticated: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetchingAuth: action.payload.isFetchingAuth,
        user: action.user,
        isAuthenticated: true,
      });
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        user: action.user,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};
