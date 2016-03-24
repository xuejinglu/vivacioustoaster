import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';

const EventItem = ({ key, name, formattedAddress, rating }) => (
  <Card style={ { width: '50%', margin: '5%' } }>
    <CardMedia
      overlay={<CardTitle title={name} subtitle={`${rating} : ${formattedAddress}`} />}
    >
      <img src="http://lorempixel.com/500/300/nature/" />
    </CardMedia>
    <CardText>
      Fill
    </CardText>
  </Card>
);

EventItem.propTypes = {
  key: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  formattedAddress: React.PropTypes.string.isRequired,
  rating: React.PropTypes.number.isRequired,
};

export default EventItem;
