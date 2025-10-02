import React from "react";
import { Link } from "react-router-dom";  // 👈 IMPORTAR Link aquí

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand page-scroll" to="/">
            Patas Pepas EPCC
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/proyecto-final">Proyecto Final</Link>
            </li>
            <li>
              <Link to="/videojuego">Videojuego</Link>
            </li>
            <li>
              <Link to="/equipo">Equipo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
