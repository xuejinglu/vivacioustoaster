import cookie from 'react-cookie';

export const RECEIVE_EVENTS_IN_DEST = 'RECEIVE_EVENTS_IN_DEST';

const receiveEventsInDest = events => ({
  type: RECEIVE_EVENTS_IN_DEST,
  payload: {
    events,
  },
});

export const clearDest = () => ({
  type: 'CLEAR_DEST',
});

export const fetchEvents = (destination) => {
  const token = cookie.load('token');
  return dispatch =>
    fetch(`/api/destinations/${destination.id}/events`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token,
      },
    }).then(res => res.json())
      .then(events => {
        dispatch(receiveEventsInDest(events));
      })
      .catch(err => console.error(err)); // add proper error handling
};

