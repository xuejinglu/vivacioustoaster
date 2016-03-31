import { connect } from 'react-redux';
import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import EventList from '../event/eventList';
import Moment from 'moment';
import { chooseDest } from './destActions';
import { clearDest } from '../event/eventActions';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router';

const mapDispatchToProps = dispatch => ({
  onChooseDest: (key) => dispatch(chooseDest(key)),
  onClearDest: () => dispatch(clearDest()),
});

let DestItem = ({ destIdx, key, location, startDate, endDate, onChooseDest, onClearDest, photoUrl }) => (// eslint-disable-line
  <Card style={ { width: '60%', margin: '5% 20%' } }>
    <CardMedia
      overlay={<CardTitle title={location}
        subtitle={`${Moment(startDate).format('MM/DD/YYYY')} -
        ${Moment(endDate).format('MM/DD/YYYY')}`}
      />}
    >
      <img src={photoUrl} className="dest-item" />
    </CardMedia>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <Link to="tag">
      <RaisedButton
        label="Add Events"
        onMouseDown={ () => onChooseDest(destIdx) }
        onMouseUp={ () => onClearDest() }
      />
    </Link>
    <EventList destIdx={destIdx} />
  </Card>
);

DestItem.propTypes = {
  key: React.PropTypes.number,
  location: React.PropTypes.string.isRequired,
  startDate: React.PropTypes.any.isRequired,
  endDate: React.PropTypes.any.isRequired,
  events: React.PropTypes.any.isRequired,
  onChooseDest: React.PropTypes.func.isRequired,
  onClearDest: React.PropTypes.func.isRequired,
  destIdx: React.PropTypes.any,
  photoUrl: React.PropTypes.string.isRequired,
};

DestItem = connect(null, mapDispatchToProps)(DestItem);

export default DestItem;
