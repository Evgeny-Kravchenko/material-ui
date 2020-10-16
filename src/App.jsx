import React from 'react';

import { CssBaseline, ThemeProvider, Grid } from '@material-ui/core';
import theme from '@src/theme';

import Header from '@components/header';
import DayList from '@components/days-list';

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
            <DayList />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
