import React, { useState } from "react";
//import MomentUtils from "@date-io/moment"; // choose your lib
//import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Dates from "./MyComponents/Dates";
import Forms from "./MyComponents/Forms";
function App() {
  //const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Forms />
    // <Dates />
    // <MuiPickersUtilsProvider utils={MomentUtils}>
    //   <DatePicker value={selectedDate} onChange={handleDateChange} />
    //   <TimePicker value={selectedDate} onChange={handleDateChange} />
    //   <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    // </MuiPickersUtilsProvider>
  );
}
export default App;
