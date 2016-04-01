import React from 'react';
import { connect } from 'react-redux';
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

let DestOverview = ({ destinations }) => (
  <Card>
    <CardText>
      <strong>Destinations: </strong>
      {
        destinations.map(destination => destination.location)
        .join(' --> ')
      }
    </CardText>
  </Card>
);

DestOverview.propTypes = {
  destinations: React.PropTypes.object.isRequired,
};

DestOverview = connect(mapStateToProps)(DestOverview);

export default DestOverview;
