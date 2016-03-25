import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import TripItem from './tripItem';
import List from 'material-ui/lib/lists/list';
import { selectTripToView } from './tripActions';

const mapStateToProps = state => ({ trips: state.trip.get('trips') });

let TripList = ({ trips }) => (
  <div>
    <List>
      {trips.map(trip =>
        <TripItem key={ trip.id } {...trip} />
      )}
    </List>
  </div>
);

TripList.propTypes = {
  trips: React.PropTypes.object.isRequired,
};

TripList = connect(mapStateToProps)(TripList);

export default TripList;
