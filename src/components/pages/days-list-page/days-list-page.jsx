import React from 'react';
import { Grid } from '@material-ui/core';
import DaysList from './components/days-list';

const DaysListPage = () => {
  return (
    <Grid item xs={12}>
      <DaysList />
    </Grid>
  );
};

export default DaysListPage;
