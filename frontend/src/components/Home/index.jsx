import React from "react";
import { useHistory } from "react-router";
import { Container } from "react-bootstrap";
import Card from "../Card";
import VaccineImage from "../../assets/images/recife-vacina-covid-19-logo.png";
import "../../styles/card.css";

const Home = ({ cardTitle }) => {
   let history = useHistory();

   const onClick = () => {
      history.push("/paciente/agendamento");
   };

   return (
      <Container className="container">
         <Card title={cardTitle}>
            <img className="home-logo" src={VaccineImage} />
            <blockquote className="blockquote">
               <p>
                  A vacinação em Recife já está disponível para todas as faixas
                  etárias através deste portal. Pacientes <b>idosos</b> terão
                  prioridade diante outras faixas etárias.
               </p>
            </blockquote>
            <input
               className="home-button"
               type="button"
               value="Quero agendar a minha vacina!"
               onClick={onClick}
            />
         </Card>
      </Container>
   );
};

export default Home;
