import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    textAlign: 'center',
    padding: theme.spacing(10),
  },
}));

const CurrentPlace = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.logo} variant="h1">
      Home
    </Typography>
  );
};

export default CurrentPlace;
