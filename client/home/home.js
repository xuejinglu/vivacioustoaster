import React from 'react';
import DestSearch from './destSearch';
import TripTypeList from './tripTypeList';
import { RaisedButton } from 'material-ui';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';

const mapStateToProps = state => ({
  destinations: state.home.get('destinations'),
});

let Home = ({ destinations }) => (
  <div>
    <DestSearch />
    <TripTypeList />
    <List>
    {destinations.map(destination =>
      <ListItem
        primaryText={destination.get('location')}
      />
    )}
    </List>
    <Link to="friend"><RaisedButton label="Create Trip" /></Link>
  </div>
);

Home.propTypes = {
  destinations: React.PropTypes.array.isRequired,
};

Home = connect(mapStateToProps)(Home);
export default Home;
