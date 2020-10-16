import React from 'react';

import { CssBaseline, ThemeProvider, Grid } from '@material-ui/core';
import theme from '@src/theme';

import Header from '@components/header';
import DayItem from '@components/day-item';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <DayItem date={new Date().toDateString()} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
