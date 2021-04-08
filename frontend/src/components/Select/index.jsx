import React from "react";
import { Field, ErrorMessage } from "formik";

const Select = ({ name, options }) => {
   return (
      <div>
         <Field as="select" name={name} className="form-input-select">
            {options.map((option) =>
               option.numberOfSchedulings === 2 ? (
                  <option disabled key={option.value} value={option.value}>
                     {option.key}
                  </option>
               ) : (
                  <option key={option.value} value={option.value}>
                     {option.key}
                  </option>
               )
            )}
         </Field>
         <br />
         <ErrorMessage
            className="form-input-error"
            component="span"
            name="schedulingHour"
         />
      </div>
   );
};

export default Select;
