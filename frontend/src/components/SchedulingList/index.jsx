import React from "react";
import ListView from "../ListView";

const SchedulingList = () => {
   const columns = [
      {
         id: "_id",
         value: "ID",
      },
      {
         id: "name",
         value: "Name",
      },
      {
         id: "birthdate",
         value: "Birthdate",
      },
      {
         id: "schedulingDate",
         value: "Scheduling Date",
      },
      {
         id: "schedulingHour",
         value: "Scheduling Hour",
      }
   ];

   return (
      <ListView title="Registered schedulings in the database" columns={columns} />
   );
};

export default SchedulingList;
