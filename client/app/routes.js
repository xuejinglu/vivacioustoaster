import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import Home from '../home/home';
import Auth from '../auth/auth';
import Friend from '../friend/friendList';
import Query from '../query/queryList';
import Tag from '../tag/tagList';
import Trip from '../trip/tripList';
import TripPlan from '../tripPlan/tripPlan';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="auth" component={Auth} />
    <Route path="friend" component={Friend} />
    <Route path="query" component={Query} />
    <Route path="tag" component={Tag} />
    <Route path="trip" component={Trip} />
    <Route path="tripPlan" component={TripPlan} />
    <Route status={404} path="*" component={Home} />
  </Route>
);
