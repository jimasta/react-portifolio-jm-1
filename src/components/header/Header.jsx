import React from "react";
import "./Header.css";
import CTA from "./CTA";
import me from "../../assets/me.jpg";
import HeaderSocial from "./HeaderSocial";

function Header() {
  return (
    <header
      id="Header"
      className="header"
      style={{
        backgroundImage: `url(${me})`,
        width: "100vw",
        backgroundSize: "100vw, cover",

      }}
    >
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Jorge Masta</h1>
        <h5 className="text-ligth">Fullstack Developer</h5>
        <CTA />

        <HeaderSocial />
        
        <div className="me">
          <img src={me} alt="me"/>
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
