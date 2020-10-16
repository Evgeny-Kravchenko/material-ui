import React from 'react';
import DayItem from '@components/day-item';
import { Grid } from '@material-ui/core';

const DaysList = () => {
  const today = new Date();
  const startDay = new Date(+today - 10 * 24 * 60 * 60 * 1000);
  const datesArray = new Array(20).fill(null).map((_, index) => {
    if (index === 0) {
      return startDay;
    }
    return new Date(+startDay + index * 24 * 60 * 60 * 1000);
  });
  const days = datesArray.map((date) => (
    <Grid key={date.toDateString()} item style={{ paddingLeft: 0, paddingRight: 0 }}>
      <DayItem date={date.toDateString()} />
    </Grid>
  ));
  return (
    <Grid container direction={'column'} spacing={10}>
      {days}
    </Grid>
  );
};

export default DaysList;
