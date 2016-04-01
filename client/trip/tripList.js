import React from 'react';
import { connect } from 'react-redux';
import Card from 'material-ui/lib/card/card';
import Immutable from 'immutable';
import TripItem from './tripItem';
import List from 'material-ui/lib/lists/list';
import { getAllTripInfo } from '../tripPlan/tripPlanActions';
import { push } from 'react-router-redux';

const mapStateToProps = state => ({ trips: state.trip.get('trips') });

const mapDispatchToProps = dispatch => ({
  getTripInfo: (trip, goNext) => dispatch(getAllTripInfo(trip.id, goNext)),
  goNext: name => dispatch(push(name)),
});

let TripList = ({ trips, getTripInfo, goNext }) => (
  <div>
    <Card style={ { width: '60%', margin: '5% 20%' } }>
      <List>
        {trips.map(trip =>
          <TripItem key={ trip.id } {...trip} goGetTripInfo={() => getTripInfo(trip, goNext)} />
        )}
      </List>
    </Card>
  </div>
);

TripList.propTypes = {
  trips: React.PropTypes.object.isRequired,
  getTripInfo: React.PropTypes.func,
  goNext: React.PropTypes.func,
};

TripList = connect(mapStateToProps, mapDispatchToProps)(TripList);

export default TripList;
