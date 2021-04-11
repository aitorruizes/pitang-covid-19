import React from "react";
import ListView from "../ListView";

const SchedulingList = () => {
   const columns = [
      {
         id: "name",
         value: "Nome",
      },
      {
         id: "birthdate",
         value: "Data de Nascimento",
      },
      {
         id: "schedulingDate",
         value: "Data de Agendamento",
      },
      {
         id: "schedulingHour",
         value: "Horário",
      },
      {
         id: "status",
         value: "Status",
      }
   ];

   return (
      <ListView title="Lista de agendamentos efetivados" columns={columns} />
   );
};

export default SchedulingList;
