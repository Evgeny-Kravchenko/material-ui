import React from 'react';
import DayItem from '@components/pages/days-list-page/components/day-item';
import { Grid, Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyle = makeStyles({
  root: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
});

const DaysList = () => {
  const classes = useStyle();
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
      <Fab className={classes.root} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Grid>
  );
};

export default DaysList;
