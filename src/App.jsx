import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { CssBaseline, ThemeProvider, Grid } from '@material-ui/core';
import theme from '@src/theme';

import Header from '@components/local/header';
import DayList from '@components/pages/days-list-page/components/days-list';
import DaysListPage from '@components/pages/days-list-page';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <ThemeProvider theme={theme}>
          <Grid container>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <Switch>
              <Route path="/" exact>
                <Grid item xs={12}>
                  <DayList />
                </Grid>
              </Route>
              <Route path="/create-new-task" exact>
                <DaysListPage />
              </Route>
            </Switch>
          </Grid>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
