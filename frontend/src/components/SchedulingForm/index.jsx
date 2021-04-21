import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import DatePicker from "../DatePicker";
import Select from "../Select";
import axios from "../../utils/api";
import "../../styles/scheduling-form.css";

const options = [
   { key: "Selecione um horário", value: "" },
   { key: "08:00", value: "08:00", numberOfSchedulings: 0 },
   { key: "08:30", value: "08:30", numberOfSchedulings: 0 },
   { key: "09:00", value: "09:00", numberOfSchedulings: 0 },
   { key: "09:30", value: "09:30", numberOfSchedulings: 0 },
   { key: "10:00", value: "10:00", numberOfSchedulings: 0 },
   { key: "10:30", value: "10:30", numberOfSchedulings: 0 },
   { key: "11:00", value: "11:00", numberOfSchedulings: 0 },
   { key: "11:30", value: "11:30", numberOfSchedulings: 0 },
   { key: "12:00", value: "12:00", numberOfSchedulings: 0 },
   { key: "12:30", value: "12:30", numberOfSchedulings: 0 },
];

let initialValues = {
   name: "",
   birthdate: "",
   schedulingDate: null,
   schedulingHour: "",
};

const validationSchema = Yup.object({
   name: Yup.string().required("Este campo é obrigatório"),
   birthdate: Yup.string().required("Este campo é obrigatório"),
   schedulingDate: Yup.date().required("Este campo é obrigatório").nullable(),
   schedulingHour: Yup.string().required("Este campo é obrigatório"),
});

const SchedulingForm = () => {
   const [hourOptions, setHourOptions] = useState(options);
   let history = useHistory();

   const onSubmit = async (values) => {
      await axios.post("/patient/scheduling/create", values);
      history.push("/paciente/agendamentos");

      const selectedHour = values.schedulingHour;

      hourOptions.forEach((hour) => {
         if (hour.value === selectedHour) {
            setHourOptions((hour.numberOfSchedulings += 1));
         }
      });
   };
   
   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
      >
         <Form className="form-container">
            <div className="form-input">
               <label>Nome:</label>
               <br />
               <Field
                  data-testid="form-name-field"
                  type="text"
                  name="name"
                  placeholder="Informe seu nome"
               />
               <br />
               <ErrorMessage
                  className="form-input-error"
                  component="span"
                  name="name"
               />
            </div>
            <br />
            <div className="form-input">
               <label>Data de Nascimento:</label>
               <br />
               <Field
                  data-testid="form-birthdate-field"
                  type="text"
                  name="birthdate"
                  placeholder="Informe data de nascimento"
               />
               <br />
               <ErrorMessage
                  className="form-input-error"
                  component="span"
                  name="birthdate"
               />
            </div>
            <br />
            <div className="form-input">
               <label>Agendar vacina para:</label>
               <br />
               <DatePicker
                  data-testid="form-schedulingDate-field"
                  name="schedulingDate"
               />
            </div>
            <br />
            <div className="form-input-select">
               <label>Horário:</label>
               <br />
               <Select
                  data-testid="form-schedulingHour-field"
                  name="schedulingHour"
                  options={hourOptions}
               />
            </div>
            <br />
            <div className="form-input">
               <input data-testid="form-btn" type="submit" value="Agendar" />
            </div>
         </Form>
      </Formik>
   );
};

export default SchedulingForm;
