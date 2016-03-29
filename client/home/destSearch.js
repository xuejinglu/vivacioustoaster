import React from 'react';
import _ from 'lodash';
import { TextField, RaisedButton } from 'material-ui';
import { connect } from 'react-redux';
import { changeStartDate, changeEndDate, changeDestination, addDestination } from './homeActions';
import DatePicker
from '../../node_modules/material-ui/lib/date-picker/date-picker';
import Geosuggest from 'react-geosuggest';

const mapStateToProps = state => ({
  startDate: state.home.getIn(['destination', 'startDate']),
  endDate: state.home.getIn(['destination', 'endDate']),
});

const mapDispatchToProps = dispatch => ({
  onChangeDestination: destination => dispatch(changeDestination(destination)),
  onChangeStartDate: newStartDate => dispatch(changeStartDate(newStartDate)),
  onChangeEndDate: newEndDate => dispatch(changeEndDate(newEndDate)),
  onAddDest: () => dispatch(addDestination()),
});

let DestSearch = ({ startDate, endDate, onChangeDestination, onChangeStartDate, onChangeEndDate, onAddDest }) => ( // eslint-disable-line
  <div>
    <Geosuggest placeholder="ex: London" onBlur={event =>
      event ? onChangeDestination(event.value) : null
    }
      onSuggestSelect={suggest => onChangeDestination(suggest.label)}
    />
    <DatePicker hintText="Departure Date" minDate={new Date()}
      maxDate={endDate ? endDate : new Date(Date.now() * 60)} // eslint-disable-line
      onChange={(event, newDate) => onChangeStartDate(newDate)}
    />
    <DatePicker hintText="End Date" minDate={startDate || new Date()}
      onChange={(event, newDate) => onChangeEndDate(newDate)}
    />
    <RaisedButton
      label="Add Destination"
      onClick={onAddDest}
    />
  </div>
);

DestSearch.propTypes = {
  onChangeDestination: React.PropTypes.func.isRequired,
  onChangeStartDate: React.PropTypes.func.isRequired,
  onChangeEndDate: React.PropTypes.func.isRequired,
  onAddDest: React.PropTypes.func.isRequired,
  startDate: React.PropTypes.object.isRequired,
  endDate: React.PropTypes.object.isRequired,
};

DestSearch = connect(mapStateToProps, mapDispatchToProps)(DestSearch);
export default DestSearch;
