import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Card from "../Card";
import axios from "../../utils/api";
import "../../styles/scheduling-information.css";

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
   const [data, setData] = useState(null);
   let history = useHistory();

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
      event.preventDefault();

      const data = {
         isVaccinated: isVaccinated.data,
         vaccine: vaccineType.data,
         schedulingId: response.response._id,
         hasConfirmedScheduling: true,
      };

      await axios.post("/patient/status/create", data);

      history.push("/paciente/agendamentos");
   };
   
   const schedulingId = response.response._id;

   useEffect(() => {
      const fetchData = async () => {

         const receivedData = await axios.get(
            `/patient/status/get/${schedulingId}`
         );

         setData(receivedData.data.findedSchedulingInformation);
      };

      fetchData();
   }, []);

   console.log(isVaccinated);

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
                  {data != null && data.isVaccinated === true ? (
                     <div>
                        <label>Sim</label>
                        <input
                           onChange={getIsVacinnated}
                           type="radio"
                           name="isVaccinated"
                           value="Sim"
                           checked={true}
                           disabled={true}
                        />
                        <label>Não</label>
                        <input
                           onChange={getIsVacinnated}
                           type="radio"
                           name="isVaccinated"
                           value="Não"
                           disabled={true}
                        />
                     </div>
                  ) : (
                     <div>
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
                           checked={true}
                        />
                     </div>
                  )}
               </div>
               <div className="patient-input-select">
                  {data != null && data.vaccine !== "" ? (
                     <div>
                        <label>Tipo da Vacina:</label>
                        <select
                           disabled
                           defaultValue=""
                           onChange={getSelectedVaccine}
                        >
                           <option value="" hidden>
                              {data.vaccine}
                           </option>
                           {options.map((option, index) => (
                              <option key={index}>{option.value}</option>
                           ))}
                        </select>
                     </div>
                  ) : (
                     <div>
                        <label>Tipo da Vacina:</label>
                        <select defaultValue="" onChange={getSelectedVaccine}>
                           <option value="" hidden>
                              Escolha uma vacina
                           </option>
                           {options.map((option, index) => (
                              <option key={index}>{option.value}</option>
                           ))}
                        </select>
                     </div>
                  )}
               </div>
               {data == null ? (
                  <div className="patient-input">
                     <input type="submit" value="Encerrar agendamento" />
                  </div>
               ) : (
                  <div className="nurse-message-container">
                     <span className="nurse-message">
                        Este agendamento foi encerrado
                     </span>
                  </div>
               )}
            </form>
         </Card>
      </Container>
   );
};

export default SchedulingInformation;
