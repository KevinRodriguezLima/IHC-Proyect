import { Image } from "./image";
import React from "react";

import Masonry from "react-masonry-css";

export const Gallery = (props) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería del juego</h2>
          <p>Explora capturas y mockups de la Pizzería VR y futuros proyectos de IHC.</p>
        </div>
        {props.data ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.data.map((d, i) => (
              <Image
                key={`${d.title}-${i}`}
                title={d.title}
                largeImage={d.largeImage}
                smallImage={d.smallImage}
              />
            ))}
          </Masonry>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};
