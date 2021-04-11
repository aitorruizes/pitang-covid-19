import React from "react";
import { Container } from "react-bootstrap";
import Card from "../Card";

const SchedulingInformation = ({ cardTitle, response }) => {
   return (
      <Container className="container">
         <Card title={cardTitle}>
             {response}
         </Card>
      </Container>
   );
};


export default SchedulingInformation;