import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../public/images/navbar-logo.png";
import "../../styles/navegation-bar.css";

const NavegationBar = () => {
   return (
      <nav className="navbar">
         <ul className="nav-links">
            <li className="nav-item">
               <Link className="nav-link" href="home" to="/home">
                  <img className="navbar-logo" src={Logo} alt="navbar-logo" />
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" href="home" to="/home">Inicio</Link>
            </li>
            <li className="nav-item">
               <Link
                  className="nav-link"
                  href="scheduling"
                  to="/patient/scheduling"
               >
                  Novo agendamento
               </Link>
            </li>
            <li className="nav-item">
               <Link
                  className="nav-link"
                  href="schedulings"
                  to="/patient/schedulings"
               >
                  Consultar agendamentos
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default NavegationBar;
