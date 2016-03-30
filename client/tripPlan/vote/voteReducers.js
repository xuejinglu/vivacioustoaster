import Immutable from 'immutable';

const initialState = Immutable.Map({
  votes: Immutable.List(),
});

const vote = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const votes = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_VOTES_IN_EVENTS':
      return state.set('votes', action.payload.votes);
    default:
      return state;
  }
};

export default votes;
