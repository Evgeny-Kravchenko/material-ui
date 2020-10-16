import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Paper, Typography, makeStyles } from '@material-ui/core';

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

const DayItem = ({ date }) => {
  const classes = useStyles();
  const isToday = new Date().toDateString() === date;
  const dayClasses = classnames({
    [classes.date]: true,
    [classes.today]: isToday,
  });
  console.log(dayClasses);
  return (
    <Paper className={classes.paper} square={true}>
      <Typography className={dayClasses} variant="body1">
        {isToday ? `Today, ${date.split(' ').join(', ')}` : date}
      </Typography>
    </Paper>
  );
};

DayItem.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DayItem;
