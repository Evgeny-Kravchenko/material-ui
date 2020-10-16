import 'date-fns';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const timeOptions = {
  hour: 'numeric',
  minute: 'numeric',
};

const TimePickerComp = ({ isTimePicker, handleTimePicker }) => {
  const [selectedTime, changeTime] = useState(new Date());

  const handleTimeAccept = (time) => {
    handleTimePicker(false, time.toLocaleTimeString('en-US', timeOptions));
  };
  const handleTimeClose = () => {
    handleTimePicker(false);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <TimePicker
        autoOk
        label="12 hours"
        value={selectedTime}
        onChange={changeTime}
        TextFieldComponent={() => null}
        open={isTimePicker}
        onAccept={handleTimeAccept}
        onClose={handleTimeClose}
      />
    </MuiPickersUtilsProvider>
  );
};

TimePickerComp.propTypes = {
  isTimePicker: PropTypes.bool.isRequired,
  handleTimePicker: PropTypes.func.isRequired,
};

export default TimePickerComp;
