import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/card.css";

const CardComponent = ({ title, children }) => (
   <Card className="card">
      <Card.Header className="card-header">{title}</Card.Header>
      <Card.Body className="card-body">{children}</Card.Body>
   </Card>
);

export default CardComponent;
