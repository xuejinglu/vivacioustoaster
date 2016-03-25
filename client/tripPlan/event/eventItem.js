import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import Avatar from 'material-ui/lib/avatar';

const EventItem = ({ key, name, address, rating, tags }) => (
  <Card style={ { width: '50%', margin: '5%' } }>
    <CardMedia
      overlay={<CardTitle title={name} subtitle={`${rating} : ${address}`} />}
    >
      <img src="http://lorempixel.com/500/300/nature/" />
    </CardMedia>
    <CardText>
      {tags.map(tag =>
        <Avatar
          src={`../assets/${tag.toLowerCase()}.jpg`}
          style={{ margin: '0 2.5%' }}
        />
      )}
    </CardText>
  </Card>
);

EventItem.propTypes = {
  key: React.PropTypes.number,
  name: React.PropTypes.string.isRequired,
  address: React.PropTypes.string.isRequired,
  rating: React.PropTypes.number.isRequired,
  tags: React.PropTypes.arrayOf(React.PropTypes.string),
};

export default EventItem;
