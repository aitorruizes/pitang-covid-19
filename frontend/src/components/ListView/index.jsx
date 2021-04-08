import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import Card from "../Card";
import Table from "../Table";
import axios from "../../utils/api";

const ListView = ({ title, columns }) => {
   const [rows, setRows] = useState([]);
   const [loading, setLoading] = useState(false);

   const formattedDate = (response) => {
      response.data.schedulings.forEach((scheduling) => {
         let date = new Date(scheduling.schedulingDate);

         const day = date.getDate();
         const month = date.getMonth() + 1;
         const year = date.getFullYear();

         date = (day + "/" + month + "/" + year);

         scheduling.schedulingDate = date;
      });
   };

   const fetchData = async () => {
      setLoading(true);

      try {
         const response = await axios.get("/patient/scheduling/getAll");
         formattedDate(response);
         setRows(response.data.schedulings);
         setLoading(false);
      } catch (error) {
         console.log(error.message);
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <Container className="mt-5">
         <Card title={title}>
            {loading ? (
               <Spinner animation="border" role="status">
                  <span className="sr-only">Carregando...</span>
               </Spinner>
            ) : (
               <Table columns={columns} rows={rows} />
            )}
         </Card>
      </Container>
   );
};

export default ListView;
