import React from 'react';
import _ from 'lodash';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { changeStartDate, changeEndDate, changeDestination } from './homeActions';
import DatePicker
from '../../node_modules/material-ui/lib/date-picker/date-picker';
import Geosuggest from 'react-geosuggest';

const mapDispatchToProps = dispatch => ({
  onChangeDestination: destination => dispatch(changeDestination(destination)),
  onChangeStartDate: newStartDate => dispatch(changeStartDate(newStartDate)),
  onChangeEndDate: newEndDate => dispatch(changeEndDate(newEndDate)),
});

let DestSearch = ({ onChangeDestination, onChangeStartDate, onChangeEndDate }) => (
  <div>
    <Geosuggest placeholder="ex: London" onBlur={(event) =>
      event ? onChangeDestination(event.value) : null
    }
      onSuggestSelect = {(suggest) => {
        onChangeDestination(suggest.label);
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
