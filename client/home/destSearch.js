import React from 'react';
import _ from 'lodash';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { changeStartDate, changeEndDate, changeDestination } from './homeActions';
import DatePicker
from '../../node_modules/material-ui/lib/date-picker/date-picker';

let DestSearch = ({ dispatch }) => (
  <div>
    <TextField hintText="Enter Destination" onBlur={(event) => {
      dispatch(changeDestination(event.target.value));
    }}
    />
    <DatePicker hintText="Departure Date" onChange={(event, newDate) => {
      dispatch(changeStartDate(newDate));
    }}
    />
    <DatePicker hintText="End Date" onChange={(event, newDate) => {
      dispatch(changeEndDate(newDate));
    }}
    />
    <RaisedButton label="Add another Destination" secondary href="#" />
  </div>
);

DestSearch.propTypes = {
  dispatch: React.PropTypes.element,
};

DestSearch = connect()(DestSearch);
export default DestSearch;
