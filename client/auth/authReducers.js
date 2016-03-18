import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from './authActions';

const initialState = {
  user_id: null,
};

export default (state = initialState, action) => {
  const newState = Object.assign({}, state);
  // change const to let whenever we start changing states
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        action.payload.isFetchingAuth,
        isAuthenticated: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        action.payload.isFetchingAuth,
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
