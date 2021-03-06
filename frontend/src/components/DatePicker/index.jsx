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
                     placeholderText="Informe data da vacina"
                  />
               );
            }}
         </Field>
         <br/>
         <ErrorMessage className="form-input-error" component="span" name={name}/>
      </div>
   );
};

export default DatePicker;
