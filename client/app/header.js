import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import { AppBar, Tabs, Tab } from 'material-ui';
import { Link } from 'react-router';
import { logout } from '../auth/authActions';
import { fetchTrips } from '../trip/tripActions';

const mapStateToProps = state => ({
  user: state.query.get('events'),
});

const mapDispatchToProps = dispatch => ({
  onLogout: id => dispatch(logout()),
  onClickTrips: () => dispatch(fetchTrips()),
});

let Header = ({ onLogout, onClickTrips }) => (
  <AppBar title="voyAger" showMenuIconButton={false}>
    <Link to="/trip"><Tab label="My Trips" onClick={ () =>
      onClickTrips() }
    />
    </Link>
    <Link to="/home"><Tab label="Home" /></Link>
    <Tab label="Logout" onClick={() => onLogout()} />
  </AppBar>
);

Header.propTypes = {
  onLogout: React.PropTypes.func.isRequired,
  onClickTrips: React.PropTypes.func.isRequired,
};

Header = connect(null, mapDispatchToProps)(Header);

export default Header;
