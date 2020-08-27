import React from "react";
import { Link } from "react-router-dom";
import "../gustavo-velasquez/GustavoVelasquez.css";
const GustavoVelasquez = (props) => {
  return(
    <>
      Gustavo
      <Link className="link" to="/far-8-githubtest">Volver</Link>
    </>
  )
}

export default GustavoVelasquez;