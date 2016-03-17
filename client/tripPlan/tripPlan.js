import React from 'react';

import EventList from './event/eventList';
import DestList from './dest/destList';
import TripOverview from './tripOverview/travelFriendList';

const TripPlan = () => (
  <div>
  we are on TripPlan page!
  <tripOverview />
  <EventList />
  <DestList />
  </div>
);

export default TripPlan;
