import React from 'react';
import { connect } from 'react-redux';
import DestItem from './destItem';
import List from 'material-ui/lib/lists/list';

const mapStateToProps = state => ({
  destinations: state.tripPlan.dest.get('destinations'),
  events: state.tripPlan.dest.get('events'),
});

let DestList = ({ destinations, events }) => (
  <div>
    <List>
      {destinations.map((destination, destIdx) =>
        <DestItem
          destIdx={destIdx} events={events.get(destIdx)}
          key={ destination.id } {...destination}
        />
      )}
    </List>
  </div>
);

DestList.propTypes = {
  destinations: React.PropTypes.object.isRequired,
  events: React.PropTypes.array.isRequired,
};

DestList = connect(mapStateToProps)(DestList);


export default DestList;
