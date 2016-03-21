import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui';
import { changeTripType } from './homeActions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  onTripTypeChange: tripType => dispatch(changeTripType(tripType)),
});

let TripTypeList = ({ onTripTypeChange }) => (
  <div>
    <RadioButtonGroup defaultSelected="Group" onChange={(event, tripType) => {
      onTripTypeChange(tripType);
    }}
    >
      <RadioButton label="Group" value="Group" />
      <RadioButton label="Solo" value="Solo" />
      <RadioButton label="Couple" value="Couple" />
    </RadioButtonGroup>
  </div>
);

TripTypeList.propTypes = {
  onTripTypeChange: React.PropTypes.func.isRequired,
};

TripTypeList = connect(null, mapDispatchToProps)(TripTypeList);
export default TripTypeList;
