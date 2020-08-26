import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


export default function Dashboard() {
  return (
    <div className="App grid">
      <div className="centered">
      <div className="name">
        <Link className="nav-item" to="/alfredo-zimperz">
          Alfredo Zimperz
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/benjamin-cifre">
          Benajmin Cifre
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/daniel-nicolaevsky">
          Daniel Nicolaevsky
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/danitza-bonilla">
          Danitza Bonilla
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/diego-fried">
          Diego Fried
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/esteban-raffo">
          Esteban Raffo
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/felipe-perarnau">
          Felipe Perarnau
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/gustavo-velasquez">
          Gustavo Velasquez
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/javier-izquierdo">
          Javier Izquierdo
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/jorge-elias">
          Jorge Elias
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/jorge-elias">
          Jorge Fernandez
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/juan-herrera">
          Juan Herrera
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/nancy-pompei">
          Nancy Pompei
        </Link>
      </div>
      <div className="name">
        <Link className="nav-item" to="/javier-rivera">
          Javier Rivera
        </Link>
      </div>
      </div>
    </div>
  );
}

