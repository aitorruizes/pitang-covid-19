import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import DatePicker from "../DatePicker";
import Select from "../Select";
import axios from "../../utils/api";
import "../../styles/scheduling-form.css";

const options = [
   { key: "Selecione um horário", value: "" },
   { key: "8:00", value: "8:00" },
   { key: "8:30", value: "8:30" },
   { key: "9:00", value: "9:00" },
   { key: "9:30", value: "9:30" },
   { key: "10:00", value: "10:00" },
   { key: "10:30", value: "10:30" },
   { key: "11:00", value: "11:00" },
   { key: "11:30", value: "11:30" },
   { key: "12:00", value: "12:00" },
   { key: "12:30", value: "12:30" }
];

const initialValues = {
   name: "",
   birthdate: "",
   schedulingDate: null,
   schedulingHour: "",
};

const validationSchema = Yup.object({
   name: Yup.string().required("This field is required."),
   birthdate: Yup.string().required("This field is required."),
   schedulingDate: Yup.date().required("This field is required.").nullable(),
   schedulingHour: Yup.string().required("This field is required."),
});

const SchedulingForm = () => {

   let history = useHistory();

   const onSubmit = async (values) => {
      await axios.post("/patient/scheduling/create", values);
      history.push("/patient/schedulings");
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
               <Field type="text" name="name" placeholder="Informe seu nome" />
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
               <DatePicker name="schedulingDate" />
            </div>
            <br />
            <div className="form-input-select">
               <label>Horário:</label>
               <br />
               <Select name="schedulingHour" options={options} />
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
