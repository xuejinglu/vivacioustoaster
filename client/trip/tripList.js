import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import TripItem from './tripItem';
import List from 'material-ui/lib/lists/list';
import { selectTripToView } from './tripActions';

const mapStateToProps = state => ({ trips: state.trip.get('trips') });

const mapDispatchToProps = dispatch => ({
  onTripClick: id => dispatch(selectTripToView(id)),
});

let TripList = ({ trips, onTripClick }) => (
  <div>
    <List>
      {trips.map(trip =>
        <TripItem key={ trip.id } {...trip} onClick={() => onTripClick(trip.id)} />
      )}
    </List>
  </div>
);

TripList.propTypes = {
  trips: React.PropTypes.object.isRequired,
  onTripClick: React.PropTypes.func.isRequired,
};

TripList = connect(mapStateToProps, mapDispatchToProps)(TripList);

export default TripList;
