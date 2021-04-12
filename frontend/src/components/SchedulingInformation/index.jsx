import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import Card from "../Card";
import axios from "../../utils/api";
import "../../styles/patient-status.css";

const options = [
   { key: "vacina", value: "AstraZeneca" },
   { key: "vacina", value: "CoronaVac" },
   { key: "vacina", value: "Pfizer" },
];

const SchedulingInformation = ({ cardTitle }) => {
   const location = useLocation();
   const response = location.state;
   const [isVaccinated, setIsVaccinated] = useState(false);
   const [vaccineType, setVaccineType] = useState("");

   const getIsVacinnated = (event) => {
      if (event.target.value === "Sim") {
         const data = (event.target.value = true);
         setIsVaccinated({ ...isVaccinated, data });
      } else if (event.target.value === "Não") {
         const data = (event.target.value = false);
         setIsVaccinated({ ...isVaccinated, data });
      }
   };

   const getSelectedVaccine = (event) => {
      const data = event.target.value;
      setVaccineType({ ...vaccineType, data });
      console.log(vaccineType);
   };

   const onSubmit = async (event) => {
      event.preventDefault()

      const data = {
         hasVaccinated: isVaccinated.data,
         vaccine: vaccineType.data,
         schedulingId: response.response._id,
         hasConfirmedScheduling: true,
      };

      await axios.post("/patient/status/create", data);
   };

   return (
      <Container className="container">
         <Card title={cardTitle}>
            <form onSubmit={onSubmit} className="patient-status-container">
               <div className="patient-input">
                  <label>Nome:</label>
                  <input disabled value={response.response.name} />
               </div>
               <div className="patient-input">
                  <label>Data de Nascimento:</label>
                  <input disabled value={response.response.birthdate} />
               </div>
               <div className="patient-input">
                  <label>Data do Agendamento:</label>
                  <input disabled value={response.response.schedulingDate} />
               </div>
               <div className="patient-input">
                  <label>Horário do Agendamento:</label>
                  <input disabled value={response.response.schedulingHour} />
               </div>
               <div className="patient-input-radio">
                  <label className="patient-label">Vacinado:</label>
                  <label>Sim</label>
                  <input
                     onChange={getIsVacinnated}
                     type="radio"
                     name="isVaccinated"
                     value="Sim"
                  />
                  <label>Não</label>
                  <input
                     onChange={getIsVacinnated}
                     type="radio"
                     name="isVaccinated"
                     value="Não"
                  />
               </div>
               <div className="patient-input">
                  <label>Tipo da Vacina:</label>
                  <select onChange={getSelectedVaccine}>
                     <option disabled>Escolha uma vacina</option>
                     {options.map((option, index) => (
                        <option key={index}>{option.value}</option>
                     ))}
                  </select>
               </div>
               <div className="patient-input">
                  <input type="submit" value="Alterar agendamento" />
               </div>
            </form>
         </Card>
      </Container>
   );
};

export default SchedulingInformation;
