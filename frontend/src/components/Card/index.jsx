import React from "react";
import { Card } from "react-bootstrap";

const CardComponent = ({ title, children }) => (
   <Card>
      <Card.Header>
         <Card.Title className="mt-2">{title}</Card.Title>
      </Card.Header>
      <Card.Body>{children}</Card.Body>
   </Card>
);

export default CardComponent;
