import React from "react";
import "../../styles/footer.css";

const Footer = ({ title }) => {
   return (
      <footer className="footer">
         <p className="footer-title">
            Criado e desenvolvido por <span className="footer-title-span">{title}</span>.
         </p>
      </footer>
   );
};

export default Footer;
