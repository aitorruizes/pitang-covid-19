import React from "react";
import DatePicker from "react-datepicker";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "../Select";
import "react-datepicker/dist/react-datepicker.css";

const options = [
   { key: "Selecione um horário", value: ""},
   { key: "8:00", value: "8:00" },
   { key: "8:30", value: "8:30" },
   { key: "9:00", value: "9:00" },
   { key: "9:30", value: "9:30" },
   { key: "10:00", value: "10:00" },
   { key: "10:30", value: "10:30" },
   { key: "11:00", value: "11:00" },
   { key: "11:30", value: "11:30" },
   { key: "12:00", value: "12:00" },
   { key: "12:30", value: "12:30" },
   { key: "13:00", value: "13:00" },
   { key: "13:00", value: "13:30" },
   { key: "14:00", value: "14:00" },
   { key: "14:30", value: "14:30" },
   { key: "15:00", value: "15:00" },
   { key: "15:30", value: "15:30" },
   { key: "16:00", value: "16:00" },
   { key: "16:00", value: "16:30" },
   { key: "17:00", value: "17:00" },
   { key: "17:30", value: "17:30" }
];

const initialValues = {
   name: "",
   birthdate: "",
   schedulingDate: new Date(),
   schedulingHour: "",
};

const onSubmit = (values) => {
   console.log("Form data:", values);
};

const validationSchema = Yup.object({
   name: Yup.string().required("This field is required."),
   birthdate: Yup.string().required("This field is required."),
   schedulingDate: Yup.date().required("This field is required.").nullable(),
   schedulingHour: Yup.string().required("This field is required.")
});

const SchedulingForm = () => {
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
         <Form>
            <div className="form-input">
               <label>Nome:</label>
               <br />
               <Field type="text" name="name" placeholder="Nome..." />
               <ErrorMessage name="name" />
            </div>
            <br />
            <div className="form-input">
               <label>Data de Nascimento:</label>
               <br />
               <Field
                  type="text"
                  name="birthdate"
                  placeholder="Data de nascimento..."
               />
               <ErrorMessage name="birthdate" />
            </div>
            <br />
            <div className="form-input">
               <label>Agendar vacina para:</label>
               <br />
               <DatePicker
                  name="schedulingDate"
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date("01-04-2021")}
                  maxDate={new Date("21-04-2021")}
               />
               <ErrorMessage name="schedulingDate" />
            </div>
            <br />
            <div className="form-input">
               <label>Horário:</label>
               <br />
               <Select options={options}/>
               <ErrorMessage name="schedulingHour" />
            </div>
            <br />
            <div className="form-input">
               <input type="submit" value="Agendar" />
            </div>
         </Form>
      </Formik>
   );
};

export default SchedulingForm;