import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Paper, Typography, makeStyles } from '@material-ui/core';

import NoTasks from './components/no-tasks';

const useStyles = makeStyles((theme) => ({
  date: {
    textAlign: 'center',
    wordWrap: 'break-word',
  },
  today: {
    fontWeight: theme.typography.fontWeightBold,
  },
  paper: {
    padding: theme.spacing(10),
  },
}));

const DayItem = ({ date, tasks }) => {
  const classes = useStyles();
  const isToday = new Date().toDateString() === date;
  const dayClasses = classnames({
    [classes.date]: true,
    [classes.today]: isToday,
  });

  return (
    <Paper className={classes.paper} square={true}>
      <Typography className={dayClasses} variant="body1">
        {isToday ? `Today, ${date.split(' ').join(', ')}` : date}
      </Typography>
      {!tasks && <NoTasks />}
    </Paper>
  );
};

DayItem.propTypes = {
  date: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.any),
};

export default DayItem;
