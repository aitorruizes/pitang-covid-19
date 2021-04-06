import React from "react";
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({ name }) => {
   return (
      <div>
         <Field name={name}>
            {({ form, field }) => {
               const { setFieldValue } = form;
               const { value } = field;
               return (
                  <DateView
                     {...field}
                     id={name}
                     selected={value}
                     onChange={(value) => setFieldValue(name, value)}
                     dateFormat={"dd/MM/yyyy"}
                     minDate={new Date("01/04/2021")}
                     maxDate={new Date("21/04/2021")}
                  />
               );
            }}
         </Field>
         <br/>
         <ErrorMessage name={name}/>
      </div>
   );
};

export default DatePicker;
