import React from "react";
import FotoParque from "../../assets/image/presentacion/fondoParque.JPG";
import FutbolChoque from "../../assets/image/presentacion/futbolChoque.JPG";
import FotoManu from "../../assets/image/presentacion/fotoManu.JPG";
import FotoAutoViejo from "../../assets/image/presentacion/autoViejo.jpg";
import FotoCanela from "../../assets/image/presentacion/canelaImagen.JPG";
import FotoCiduadSantiago from "../../assets/image/presentacion/ciudadSantiago.JPG";

const carrousel = () => {
  return (
    <>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img src={FotoParque} alt="Drink" className="w-64" />
        </div>
        <div className="carousel-item">
          <img src={FutbolChoque} alt="Drink" className="w-64" />
        </div>
        <div className="carousel-item">
          <img src={FotoManu} alt="Drink" className="w-64" />
        </div>
        <div className="carousel-item">
          <img src={FotoAutoViejo} alt="Drink" className="w-64" />
        </div>
        <div className="carousel-item">
          <img src={FotoCanela} alt="Drink" className="w-64" />
        </div>
        <div className="carousel-item">
          <img src={FotoCiduadSantiago} alt="Drink" className="w-64" />
        </div>
      </div>
    </>
  );
};

export default carrousel;
