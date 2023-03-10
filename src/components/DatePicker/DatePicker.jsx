import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TheDatePicker = ({label, startDate, setStartDate}) => {

  const now = new Date();

  return (
    <div>
        <label>{label}</label>
    <DatePicker
      selected={startDate}
      includeDateIntervals={[
        {
          start: new Date(
            now.getFullYear() - 100,
            now.getMonth(),
            now.getDate()
          ),
          end: now,
        },
      ]}
      onChange={(date = Date) => setStartDate(date)}
    />
    </div>
  );
};

export default TheDatePicker;
