import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AccountCircle } from '@material-ui/icons';

import {
  TextField,
  FormControl,
  InputAdornment,
  makeStyles,
  Button,
  Grid,
} from '@material-ui/core';
import Calendar from '@components/local/header/components/calendar/calendar';
import EventIcon from '@material-ui/icons/Event';
import { grey } from '@material-ui/core/colors';

const useStylesSvgIcon = makeStyles((theme) => ({
  root: {
    fill: theme.palette.primary.dark,
  },
}));

const useStylePickers = makeStyles({
  root: {
    color: grey[600],
    textTransform: 'none',
  },
});

const useStyleTextField = makeStyles({
  root: {
    marginBottom: '20px',
  },
});

const CreateNewTaskForm = () => {
  const svgIconClasses = useStylesSvgIcon();
  const textFiledClasses = useStyleTextField();
  const pickersClasses = useStylePickers();
  const [isCalendar, setCalendar] = useState(false);
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString('En-en', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  );
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleCalendar = (value, date) => {
    setCalendar(value);
    if (date) {
      setCurrentDate(date);
    }
  };

  return (
    <FormControl onSubmit={handleSubmit(onSubmit)} size="small" fullWidth>
      <Grid item sm={12}>
        <TextField
          className={textFiledClasses.root}
          fullWidth
          placeholder="Name"
          multiline
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle className={svgIconClasses.root} />
              </InputAdornment>
            ),
          }}
          ref={register}
        />
      </Grid>
      <Grid item sm={12}>
        <TextField
          className={textFiledClasses.root}
          fullWidth
          placeholder="Description (optional)"
          multiline
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AccountCircle className={svgIconClasses.root} />
              </InputAdornment>
            ),
          }}
          ref={register}
        />
      </Grid>
      <Grid item>
        <Button
          className={pickersClasses.root}
          aria-label="calendar"
          aria-haspopup="true"
          onClick={() => handleCalendar(true, currentDate)}
          startIcon={<EventIcon />}
          disableRipple
          size="small"
        >
          {currentDate}
        </Button>
      </Grid>
      <Calendar isCalendar={isCalendar} handleCalendar={handleCalendar} />
    </FormControl>
  );
};

export default CreateNewTaskForm;
