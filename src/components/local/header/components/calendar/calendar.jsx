import 'date-fns';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const Calendar = ({ isCalendar, setCalendar }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Open me from button"
        format="MM/dd/yyyy"
        onChange={handleDateChange}
        TextFieldComponent={() => null}
        onOpen={() => setCalendar(true)}
        onClose={() => setCalendar(false)}
        open={isCalendar}
        value={selectedDate}
        setSelectedDate={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
};

Calendar.propTypes = {
  isCalendar: PropTypes.bool.isRequired,
  setCalendar: PropTypes.func.isRequired,
};

export default withStyles(
  {
    toolbar: {
      padding: 20,
    },
  },
  {
    name: 'MuiPickersDatePickerRoot',
  }
)(Calendar);
