import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import theme from '@src/theme';

import Logo from '@components/logo';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Logo />
        <Typography variant="body1">Work assistant</Typography>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </ThemeProvider>
    </>
  );
}

export default App;
