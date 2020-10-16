import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AccountCircle } from '@material-ui/icons';

import { TextField, FormControl, InputAdornment, Button, Grid } from '@material-ui/core';
import Calendar from '@components/local/header/components/calendar/calendar';
import TimePickerComp from './components/time-picker';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { useStyleTextField, useStylePickers, useStylesSvgIcon } from './styles';

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
  const [isTimePicker, setTimePicker] = useState(false);
  const [currentTime, setCurrentTime] = useState("Time isn't selected");
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

  const handleTimePicker = (value, time) => {
    setTimePicker(value);
    if (time) {
      setCurrentTime(time);
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
          size="large"
        >
          {currentDate}
        </Button>
      </Grid>
      <Grid item>
        <Button
          className={pickersClasses.root}
          aria-label="calendar"
          aria-haspopup="true"
          onClick={() => handleTimePicker(true)}
          startIcon={<ScheduleIcon />}
          disableRipple
          size="large"
        >
          {currentTime}
        </Button>
      </Grid>
      <Calendar isCalendar={isCalendar} handleCalendar={handleCalendar} />
      <TimePickerComp isTimePicker={isTimePicker} handleTimePicker={handleTimePicker} />
    </FormControl>
  );
};

export default CreateNewTaskForm;
