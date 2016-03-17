import React, { Component, PropTypes } from 'react';
import { AppBar, Tabs, Tab } from 'material-ui';
import { Router, Route, Link, browserHistory } from 'react-router';

const Header = () => (
  <AppBar title="Name This">
    <Link to="/trip"><Tab label="My Trips" /></Link>
    <Link to="/home"><Tab label="Home" /></Link>
  </AppBar>
);

export default Header;
