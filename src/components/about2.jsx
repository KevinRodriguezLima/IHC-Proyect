import React from "react";

export const About2 = (props) => {
  return (
    <div id="about2">
      <div className="container">
        <div className="row">
          {/* Imagen representativa del proyecto */}
          <div className="col-xs-12 col-md-6">
            <img 
            src={process.env.PUBLIC_URL + "/img/about.jpg"} 
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
                  : "Nuestro proyecto en IHC busca aplicar principios de diseño de usabilidad y explorar las dimensiones de la experiencia de usuario. El objetivo es crear una solución tecnológica que sea intuitiva, accesible y significativa para los usuarios."}
              </p>

              <h3>¿Por qué este Proyecto?</h3>
              <div className="list-style">
                {/* Primera columna de razones */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : [
                          "Eficiencia: permite realizar tareas de forma rápida y clara",
                          "Efectividad: asegura que los objetivos se cumplen sin errores",
                        ]}
                  </ul>
                </div>

                {/* Segunda columna de razones */}
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : [
                          "Satisfacción: genera experiencias positivas",
                          "Aprendizaje y memorabilidad: fácil de usar y recordar",
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
