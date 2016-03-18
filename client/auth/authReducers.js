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
        isFetchingAuth: true,
        isAuthenticated: false,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetchingAuth: false,
        userInfo: action.user,
        user_id: action.user.user_id,
        isAuthenticated: true,
      });
    case LOGOUT_REQUEST:
      return Object.assign({}, state, {
        userInfo: null,
        user_id: null,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};
