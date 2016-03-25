import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';

const TripItem = ({ key, name, tripType, destinations, users }) => (
  <Card style={{ width: '50%', margin: '5%' }}>
    <CardHeader>
      {users.map(user =>
        <FlatButton label={user.name} />
      )}
    </CardHeader>
    <CardMedia
      overlay={<CardTitle title={name} />}
    >
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardTitle title="Destinations" />
    <CardText>
      {destinations.map(destination =>
        <FlatButton label={`${destination.location}:
          ${destination.startDate}-${destination.endDate}`}
        />
      )}
    </CardText>
  </Card>
);

TripItem.propTypes = {
  key: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  tripType: React.PropTypes.string.isRequired,
  destinations: React.PropTypes.array.isRequired,
  users: React.PropTypes.array.isRequired,
};

export default TripItem;
