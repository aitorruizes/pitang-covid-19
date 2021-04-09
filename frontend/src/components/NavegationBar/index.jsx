import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/images/navbar-logo.png";
import "../../styles/navegation-bar.css";

const NavegationBar = () => {
   return (
      <nav className="navbar">
         <ul className="nav-links">
            <li className="nav-item">
               <Link className="nav-link" href="home" to="/inicio">
                  <img className="navbar-logo" src={Logo} alt="navbar-logo" />
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" href="home" to="/inicio">Inicio</Link>
            </li>
            <li className="nav-item">
               <Link
                  className="nav-link"
                  href="scheduling"
                  to="/paciente/agendamento"
               >
                  Novo agendamento
               </Link>
            </li>
            <li className="nav-item">
               <Link
                  className="nav-link"
                  href="schedulings"
                  to="/paciente/agendamentos"
               >
                  Consultar agendamentos
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavegationBar;
