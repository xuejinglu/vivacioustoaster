export const changeStartDate = (date) => ({
  type: 'CHANGE_STARTDATE',
  payload: {
    date,
  },
});

export const changeEndDate = (date) => ({
  type: 'CHANGE_ENDDATE',
  payload: {
    date,
  },
});
