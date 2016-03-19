import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui';
import { changeTripType } from './homeActions';
import { connect } from 'react-redux';

let TripTypeList = ({ dispatch }) => (
  <div>
    <RadioButtonGroup defaultSelected="Group" onChange={(event, tripType) => {
      dispatch(changeTripType(tripType));
    }}
    >
      <RadioButton label="Group" value="Group" />
      <RadioButton label="Solo" value="Solo" />
      <RadioButton label="Couple" value="Couple" />
    </RadioButtonGroup>
  </div>
);

TripTypeList.propTypes = {
  dispatch: React.PropTypes.element,
};

TripTypeList = connect()(TripTypeList);
export default TripTypeList;
