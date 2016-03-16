import React from 'react';
import { TextField, RaisedButton, DatePicker } from 'material-ui';
// import DatePicker from 'material-ui/lib/date-picker/date-picker';
import { Router, Route, Link, browserHistory } from 'react-router';


const DestSearch = () => (
  <div>
    <TextField hintText="Enter Destination" />
    <DatePicker hintText="Departure Date" container="inline" />
    <DatePicker hintText="Return Date" container="inline" />
    <RaisedButton label="Add Destination" secondary href="#" />
  </div>
);

export default DestSearch;
