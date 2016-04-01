import React from 'react';
import { connect } from 'react-redux';
import TravelFriendItem from './travelFriendItem';
import TravelFriendSecondaryList from './travelFriendSecondaryList';
import DestOverview from './destOverview';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Avatar from 'material-ui/lib/avatar';

const mapStateToProps = state => ({
  destinations: state.tripPlan.dest.get('destinations'),
});

let TripOverview = ({ destinations }) => (
  <div>
    <Card style={ { width: '60%', margin: '5% 20%' } }>
      <CardTitle title="Let's Take Off!" style={{ textAlign: 'center' }} />
      <DestOverview />
      <TravelFriendSecondaryList />
    </Card>
  </div>
);

TripOverview.propTypes = {
  destinations: React.PropTypes.object.isRequired,
};

TripOverview = connect(mapStateToProps)(TripOverview);

export default TripOverview;
