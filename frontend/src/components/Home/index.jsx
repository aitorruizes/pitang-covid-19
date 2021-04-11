import React from "react";
import { Container } from "react-bootstrap";
import Card from "../Card";
import "../../styles/home-card.css";

const Home = ({ cardTitle }) => {
   return (
      <Container className="container">
         <Card title={cardTitle}></Card>
      </Container>
   );
};

export default Home;
