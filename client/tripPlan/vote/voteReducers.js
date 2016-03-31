import Immutable from 'immutable';
import { REQUEST_VOTES, RECEIVE_VOTES_FOR_EVENTS, FETCH_VOTES_FAILURE } from './voteActions';

const initialState = Immutable.Map({
  isFetching: false,
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
    case REQUEST_VOTES:
      return state.set('isFetching', true);
    case RECEIVE_VOTES_FOR_EVENTS:
      state.set('isFetching', false);
      return state.set('votes', action.payload.votes);
    default:
      return state;
  }
};

export default votes;
