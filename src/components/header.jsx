import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 intro-text text-center">
                <h1>{props.data ? props.data.title : "Interacción Humano-Computadora"}</h1>
                <p>{props.data ? props.data.paragraph : "Ciencia de la Computación | Diseño centrado en el usuario"}</p>
                
                <div className="cta-buttons">
                  <Link to="/proyecto-final" className="btn btn-custom btn-lg">
                    🚀 Proyecto Final
                  </Link>
                  <Link to="/videojuego" className="btn btn-custom btn-lg">
                    🎮 Videojuego
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
