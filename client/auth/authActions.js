import fetch from 'isomorphic-fetch';
import { routeActions } from 'react-router-redux';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

export const requestLogin = () => ({
  type: LOGIN_REQUEST,
  payload: {
    isFetchingAuth: true,
  },
});

export const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  payload: {
    isFetchingAuth: false,
    user,
  },
});

export const loginError = (message) => ({
  type: LOGIN_FAILURE,
  payload: {
    isFetchingAuth: false,
    message,
  },
});

export const requestLogout = () => ({
  type: LOGOUT_REQUEST,
});
// place your api calls HURRS
export const logout = () =>
  dispatch => {
    dispatch(requestLogout());
    window.sessionStorage.removeItem('com.tripsApp');
    dispatch(routeActions.push('/home'));
  };

export const login = () =>
  dispatch => {
    dispatch(requestLogin());

    const userRequest = new Request('/api/users', {
      method: 'get',
      headers: {
        user: window.sessionStorage,
        'Content-Type': 'application/json',
      },
    });

    fetch(userRequest)
      .then(response => {
        console.log(response);
        dispatch(routeActions.push('/home'));
      })
      .catch(err => {
        console.log('Error on login:', err);
      });
  };

export const fbLogin = () =>
  dispatch => {
    dispatch(requestLogin());
    fetch('/login/facebook')
        .then(response => {
          console.log(response);
          // set response.user to the state
          window.sessionStorage.setItem('com.tripsApp', response.token);
          dispatch(routeActions.push('/home'));
        })
        .catch(err => {
          console.log('Error in facebook authentication:', err);
        });
  };
