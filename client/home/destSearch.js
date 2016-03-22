import React from 'react';
import _ from 'lodash';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { changeStartDate, changeEndDate, changeDestination } from './homeActions';
import DatePicker
from '../../node_modules/material-ui/lib/date-picker/date-picker';

const mapDispatchToProps = dispatch => ({
  onChangeDestination: destination => dispatch(changeDestination(destination)),
  onChangeStartDate: newStartDate => dispatch(changeStartDate(newStartDate)),
  onChangeEndDate: newEndDate => dispatch(changeEndDate(newEndDate)),
});

let DestSearch = ({ onChangeDestination, onChangeStartDate, onChangeEndDate }) => (
  <div>
    <TextField hintText="Enter Destination" onBlur={(event) => {
      onChangeDestination(event.target.value);
    }}
    />
    <DatePicker hintText="Departure Date" onChange={(event, newDate) => {
      onChangeStartDate(newDate);
    }}
    />
    <DatePicker hintText="End Date" onChange={(event, newDate) => {
      onChangeEndDate(newDate);
    }}
    />
    <RaisedButton label="Add another Destination" secondary href="#" />
  </div>
);

DestSearch.propTypes = {
  onChangeDestination: React.PropTypes.func.isRequired,
  onChangeStartDate: React.PropTypes.func.isRequired,
  onChangeEndDate: React.PropTypes.func.isRequired,
};

DestSearch = connect(null, mapDispatchToProps)(DestSearch);
export default DestSearch;
