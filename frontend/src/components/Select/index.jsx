import React from "react";
import { Field } from "formik";

const Select = ({ options }) => {
   return (
      <div>
         <Field as="select">
            {options.map((option) => {
               return (
                  <option key={option.value} value={option.value}>
                     {option.key}
                  </option>
               );
            })}
         </Field>
      </div>
   );
};

export default Select;
