import 'date-fns';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const dateOptions = {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
};

const Calendar = ({ isCalendar, handleCalendar }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString('En-en', dateOptions)
  );

  const handleDateChange = (date) => {
    setSelectedDate(date.toLocaleDateString('En-en', dateOptions));
  };

  const handleDateAccept = (date) => {
    handleCalendar(false, date.toLocaleDateString('En-en', dateOptions));
  };

  const handleOnClose = () => {
    handleCalendar(false);
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
        open={isCalendar}
        value={selectedDate}
        setSelectedDate={handleDateChange}
        onAccept={handleDateAccept}
        onClose={handleOnClose}
      />
    </MuiPickersUtilsProvider>
  );
};

Calendar.propTypes = {
  isCalendar: PropTypes.bool.isRequired,
  handleCalendar: PropTypes.func,
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
