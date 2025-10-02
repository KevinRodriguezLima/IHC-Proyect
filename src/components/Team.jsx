import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Nuestro Equipo</h2>
          <p>
            Estudiantes de Ciencias de la Computación – UNSA, Arequipa.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-3 col-sm-6 team-card"
                >
                  <div className="thumbnail team-box">
                    <div className="circle-frame">
                      <img 
                        src={process.env.PUBLIC_URL + "/" + d.img} 
                        alt={d.name} 
                        className="team-img" 
                      />

                    </div>
                    <div className="caption text-center">
                      <h4>{d.name}</h4>
                      <p className="role">{d.job}</p>
                      <p className="extra">{d.extra}</p>
                    </div>
                  </div>
                </div>
              ))
            : "Cargando integrantes..."}
        </div>
      </div>
    </div>
  );
};
