import React, { useState } from "react";
import { DatePicker,DateTimePicker } from "react-rainbow-components";

export default function RainbowDatepicker() {
  const [date, setDate] = useState(null);

  function onChange(date) {
    console.log('date->', date);
    setDate(date);
  }

  return (
   
    <DateTimePicker
    id="datePicker-1"
    value={date}
    onChange={onChange}
    label="DatePicker Label"
    formatStyle="small"
  />
  );
}