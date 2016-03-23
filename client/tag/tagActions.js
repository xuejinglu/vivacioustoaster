const map = new google.maps.Map(document.createElement('div')); // eslint-disable-line
const service = new google.maps.places.PlacesService(map); // eslint-disable-line

export const toggleTag = (tag) => ({
  type: 'TOGGLE_TAG',
  payload: {
    tag,
  },
});

export const receiveEvents = (events) => ({
  type: 'RECEIVE_EVENTS',
  payload: {
    events,
  },
});

const request = {
  query: 'Paris Museum',
};

export const startSearch = () =>
  dispatch =>
    service.textSearch(request, (results, status) => {
      dispatch(receiveEvents(results));
    });
