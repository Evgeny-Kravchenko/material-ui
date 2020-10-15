import React from 'react';
import { Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  date: {
    textAlign: 'center',
    wordWrap: 'break-word',
  },
  paper: {
    padding: theme.spacing(10),
  },
}));

const DayItem = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} square={true}>
      <Typography className={classes.date} variant="body1">
        {new Date().toDateString()}
      </Typography>
    </Paper>
  );
};

export default DayItem;
