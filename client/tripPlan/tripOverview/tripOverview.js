import React from 'react';
import { connect } from 'react-redux';
import TravelFriendList from './travelFriendList';
import DestOverview from './destOverview';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';

const mapStateToProps = state => ({
  destinations: state.tripPlan.dest.get('destinations'),
});

let TripOverview = ({ destinations }) => (
  <div>
    <Card style={ { width: '60%', margin: '2.5% 20%' } }>
      <CardTitle title="Let's Take Off!" style={{ textAlign: 'center' }} />
      <DestOverview />
      <TravelFriendList />
    </Card>
  </div>
);

TripOverview.propTypes = {
  destinations: React.PropTypes.object.isRequired,
};

TripOverview = connect(mapStateToProps)(TripOverview);

export default TripOverview;
