import React from 'react';
import DestSearch from './destSearch';
import TripTypeList from './tripTypeList';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import { clearDestination, clearDestinations } from './homeActions';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';

class Home extends React.Component {
  componentWillMount() {
    this.props.goClearDestinations();
    this.props.goClearDestination();
  }

  render() {
    return (
      <div>
      <Card style={ { width: '60%', margin: '2% 20%' } }>
        <CardHeader
          title={'To Begin!'}
        />
        <DestSearch style={ { width: '100%', margin: '5% 20%' } } />
        <TripTypeList />
        <List
          style={ { width: '60%', margin: '0% 18%' } }
          subheader={'Oh the places you will go!'}
        >
          {this.props.destinations.map(destination =>
            <ListItem
              primaryText={destination.get('location')}
            />
          )}
        </List>
        <Link to={this.props.tripType === 'Solo' ? 'tag' : 'friend' }
          style={{ visibility: this.props.destinations.length ? 'visible' : 'hidden' }}
        >
          <RaisedButton
            secondary label="Create Trip"
            style={ { width: '60%', margin: '5% 20%' } }
          />
        </Link>
      </Card>
      </div>
    );
  }
}

Home.propTypes = {
  destinations: React.PropTypes.array.isRequired,
  goClearDestination: React.PropTypes.func.isRequired,
  goClearDestinations: React.PropTypes.func.isRequired,
  tripType: React.PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  destinations: state.home.get('destinations'),
  tripType: state.home.get('tripType'),
});

const mapDispatchToProps = dispatch => ({
  goClearDestinations: () => dispatch(clearDestinations()),
  goClearDestination: () => dispatch(clearDestination()),
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
