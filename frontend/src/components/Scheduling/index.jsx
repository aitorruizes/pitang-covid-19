import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const schedules = [
   { hour: "8:00" },
   { hour: "8:30" },
   { hour: "9:00" },
   { hour: "9:30" },
   { hour: "10:00" },
   { hour: "10:30" },
   { hour: "11:00" },
   { hour: "11:30" },
   { hour: "12:00" },
   { hour: "12:30" },
   { hour: "13:00" },
   { hour: "13:30" },
   { hour: "14:00" },
   { hour: "14:30" },
   { hour: "15:00" },
   { hour: "15:30" },
   { hour: "16:00" },
   { hour: "16:30" },
   { hour: "17:00" },
   { hour: "17:30" },
];

const Scheduling = () => {
   const [name, setName] = useState("");
   const [birthdate, setBirthdate] = useState("");
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [formattedDate, setFormattedDate] = useState("");
   const [selectedHour, setSelectedHour] = useState({});

   const onNameChange = (event) => {
      setName(event.target.value);
   };

   const onBirthdateChange = (event) => {
      setBirthdate(event.target.value);
   };

   const onDateChange = (date) => {
      setSelectedDate(date);

      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      date = day + "/" + month + "/" + year;

      setFormattedDate(date);
   };

   const onHourChange = (event) => {
      setSelectedHour(event.target.value);
   };

   const sendScheduling = (event) => {
      event.preventDefault();
      console.log({
         name: name,
         birthdate: birthdate,
         schedulingDate: formattedDate,
         schedulingHour: selectedHour,
      });
   };

   return (
      <form>
         <div className="form-input">
            <label>Nome:</label>
            <br />
            <input
               value={name}
               onChange={onNameChange}
               type="text"
               placeholder="Nome"
            />
         </div>
         <br />
         <div className="form-input">
            <label>Data de Nascimento:</label>
            <br />
            <input
               value={birthdate}
               onChange={onBirthdateChange}
               type="text"
               name="birthdate"
            />
         </div>
         <br />
         <div className="form-input">
            <label>Agendar vacina para:</label>
            <br />
            <DatePicker
               dateFormat="dd/MM/yyyy"
               selected={selectedDate}
               onChange={onDateChange}
               minDate={new Date("01-04-2021")}
               maxDate={new Date("21-04-2021")}
            />
         </div>
         <br />
         <div className="form-input">
            <label>Horário:</label>
            <br />
            <select onChange={onHourChange}>
               <option value="" disabled>
                  Escolha um horário
               </option>
               {schedules.map((schedule, index) => (
                  <option value={selectedHour.hour} key={index}>
                     {schedule.hour}
                  </option>
               ))}
            </select>
         </div>
         <br />
         <div className="form-input">
            <input onClick={sendScheduling} type="button" value="Agendar" />
         </div>
      </form>
   );
};

export default Scheduling;
