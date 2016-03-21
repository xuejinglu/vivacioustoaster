import fetch from 'isomorphic-fetch';

export const save = (destination, tripType) => {
  fetch('/api/trips', {
    method: 'POST',
    body: {
      destination,
      tripType,
    },
  });
};
