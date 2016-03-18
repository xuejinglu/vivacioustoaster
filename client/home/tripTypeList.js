import React from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui';

const TripTypeList = () => (
  <div>
    <RadioButtonGroup defaultSelected="Group" >
      <RadioButton label="Group" value="Group" />
      <RadioButton label="Solo" value="Solo" />
      <RadioButton label="Couple" value="Couple" />
    </RadioButtonGroup>
  </div>
);

export default TripTypeList;
