import React from 'react';
import { createUseStyles } from 'react-jss';
import theme from '@src/theme';

import Typography from '@material-ui/core/Typography';

const useStyles = createUseStyles({
  logo: {
    color: 'gray',
    textAlign: 'center',
    padding: theme.spacing(10),
  },
});

const Logo = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.logo} variant="h1">
      Work assistant
    </Typography>
  );
};

export default Logo;
