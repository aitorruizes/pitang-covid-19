import React from "react";
import { Container } from "react-bootstrap";
import Card from "../Card";

const Home = ({ cardTitle, footerTitle }) => {
   return (
      <Container className="mt-5">
         <Card title={cardTitle}>
            <blockquote className="blockquote mb-0">
               <p className="text-align:center">
                  Projeto desenvolvido por mim para o desafio final do processo seletivo da Pitang.
               </p>
            </blockquote>
         </Card>
      </Container>
   );
};

export default Home;
