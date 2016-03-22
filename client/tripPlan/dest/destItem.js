import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import EventList from '../event/eventList';

const DestItem = ({ key, location, startDate, endDate }) => (
  <Card style={ { width: '50%', margin: '5%' } }>
    <CardMedia
      overlay={<CardTitle title={location} subtitle={`${startDate} - ${endDate}`} />}
    >
      <img src="http://lorempixel.com/500/300/nature/" />
    </CardMedia>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

DestItem.propTypes = {
  key: React.PropTypes.number,
  location: React.PropTypes.string.isRequired,
  startDate: React.PropTypes.any.isRequired,
  endDate: React.PropTypes.any.isRequired,
};

export default DestItem;
