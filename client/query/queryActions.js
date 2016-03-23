import fetch from 'isomorphic-fetch';
import { setTripAndGetDestinations } from '../tripPlan/tripPlanActions';

export const save = (destinations, tripType, friends) =>
  dispatch =>
    fetch('/api/trips', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destinations,
        tripType,
        friends,
      }),
    }).then(res => res.json())
      .then(json => dispatch(setTripAndGetDestinations(json)))
      .catch(err => console.error(err)); // add proper error handling
