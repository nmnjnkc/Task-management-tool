import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatepickerComponent = ({ inputDate, onDateChange, label, placeholder }) => {
  const [selectedDate, setSelectedDate] = useState(
    inputDate ? new Date(inputDate) : null
  );

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
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
    />
     </div>
  );
};

export default DatepickerComponent;
