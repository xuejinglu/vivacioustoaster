import React from 'react';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { changeStartDate, changeEndDate } from './homeActions';
import DatePicker
from '../../node_modules/material-ui/lib/date-picker/date-picker';

let DestSearch = ({ dispatch }) => (
  <div>
    <TextField hintText="Enter Destination" />
    <DatePicker hintText="Departure Date" onChange={(event, newDate) => {
      dispatch(changeStartDate(newDate));
    }}
    />
    <DatePicker hintText="End Date" onChange={(event, newDate) => {
      dispatch(changeEndDate(newDate));
    }}
    />
    <RaisedButton label="Add Destination" secondary href="#" />
  </div>
);

DestSearch.propTypes = {
  dispatch: React.PropTypes.element,
};

DestSearch = connect()(DestSearch);
export default DestSearch;
