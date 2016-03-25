import fetch from 'isomorphic-fetch';

const receiveEventsInDest = events => ({
  type: 'RECEIVE_EVENTS_IN_DEST',
  payload: {
    events,
  },
});

export const fetchEvents = destination =>
  dispatch =>
    fetch(`/api/destinations/${destination.id}/events`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
      .then(events => {
        dispatch(receiveEventsInDest(events));
      })
      .catch(err => console.error(err)); // add proper error handling
