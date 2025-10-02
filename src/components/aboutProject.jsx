import React from "react";

export const AboutProject = (props) => {
  return (
    <div id="about-project">
      <div className="container">
        <div className="row">
          {/* Imagen del proyecto */}
          <div className="col-xs-12 col-md-6">
            <img
              src="img/project.jpg"
              className="img-responsive"
              alt="Proyecto IHC"
            />
          </div>

          {/* Texto descriptivo */}
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre el Proyecto</h2>
              <p>
                {props.data
                  ? props.data.paragraph
                  : "Este proyecto en IHC busca aplicar principios de usabilidad y dimensiones de UX para construir soluciones tecnológicas intuitivas, accesibles y centradas en el usuario."}
              </p>

              <h3>Principios y dimensiones de usabilidad</h3>
              <div className="list-style">
                {/* Primera columna */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : [
                          "Eficiencia: tareas rápidas y claras",
                          "Efectividad: alcanzar objetivos sin errores",
                        ]}
                  </ul>
                </div>

                {/* Segunda columna */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : [
                          "Satisfacción: experiencia positiva",
                          "Aprendizaje: curva de uso intuitiva",
                        ]}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
