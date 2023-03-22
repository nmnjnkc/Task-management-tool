import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatepickerComponent = ({
  inputDate,
  onDateChange,
  label,
  placeholder,
  before,
}) => {
  const [selectedDate, setSelectedDate] = useState(
    inputDate ? new Date(inputDate) : null
  );
  const now = new Date();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (onDateChange) {
      onDateChange(date.getTime());
    }
  };

  return (
    <div>
      <label>{label}</label>
      <DatePicker
        placeholderText={placeholder}
        selected={selectedDate}
        includeDateIntervals={
          before
            ? [
                {
                  start: new Date(
                    now.getFullYear() - 100,
                    now.getMonth(),
                    now.getDate()
                  ),
                  end: now,
                },
              ]
            : [
                {
                  start: now,
                  end: new Date(
                    now.getFullYear() + 10,
                    now.getMonth(),
                    now.getDate()
                  ),
                },
              ]
        }
        onChange={handleDateChange}
        dateFormat="dd-MM-yyyy"
      />
    </div>
  );
};

export default DatepickerComponent;
