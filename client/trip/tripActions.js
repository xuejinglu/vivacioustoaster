export const selectTripToView = id => ({
  type: 'SELECT_TRIP',
  payload: {
    id,
  },
});