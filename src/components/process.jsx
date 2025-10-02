import React from "react";

export const Process = (props) => {
  return (
    <div id="services">
      <div className="container">
        <div className="section-title text-center">
          <h2>Proceso de Desarrollo</h2>
          <p>
            Conoce cada etapa en la creación de nuestra Pizzería VR, desde la investigación inicial hasta el prototipo final.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.stage}-${i}`} className="col-md-4">
                  <div className="service-card">
                    <h3>{d.stage}</h3>
                    <ul>
                      {d.deliverables.map((item, j) => (
                        <li key={j}>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {/* Iconos según tipo de archivo */}
                              {item.type === "pdf" && <i className="fa fa-file-pdf"></i>}
                              {item.type === "ppt" && <i className="fa fa-file-powerpoint"></i>}
                              {item.type === "video" && <i className="fa fa-video"></i>}
                              {item.type === "image" && <i className="fa fa-image"></i>}
                              {item.name}
                            </a>
                          ) : (
                            item.name
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            : "Cargando etapas..."}
        </div>
      </div>
    </div>
  );
};
