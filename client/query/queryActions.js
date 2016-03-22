import fetch from 'isomorphic-fetch';

export const save = (destinations, tripType, friends) => {
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
  });
};
