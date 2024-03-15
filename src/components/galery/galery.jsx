import React, { useState } from "react";
import FotoParque from "../../assets/image/presentacion/fondoParque.JPG";
import FutbolChoque from "../../assets/image/presentacion/futbolChoque.JPG";
import FotoManu from "../../assets/image/presentacion/fotoManu.JPG";
import FotoAutoViejo from "../../assets/image/presentacion/autoViejo.jpg";
import FotoCanela from "../../assets/image/presentacion/canelaImagen.JPG";
import FotoCiduadSantiago from "../../assets/image/presentacion/ciudadSantiago.JPG";
import FotoCaballero from "../../assets/image/presentacion/fotoCaballero.png";
import FotoDiegoPablo from "../../assets/image/presentacion/diegoPablo.png";
import FotoHallowen from "../../assets/image/presentacion/fotoHallowen.png";
import FotoSofi from "../../assets/image/presentacion/fotoSofi.png";
import FotoManuTatto from "../../assets/image/presentacion/fotoManuMano.png";
import FotoEdinson from "../../assets/image/presentacion/fotoEdinson.png";

const galery = () => {
  return (
    <>
      <h1
        className="mt-6 text-black text-[34px]"
        style={{ textAlign: "center" }}
      >
        Coming soon, official website presentation
      </h1>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 mt-8 mr-2 ml-2">
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoCanela}
            alt="foto perrita canela"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoManu}
            alt="foto adulto mayor"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoAutoViejo}
            alt="automovil en la calle"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoParque}
            alt="foto de un parque"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoCiduadSantiago}
            alt="foto santiago chile"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoCaballero}
            alt="foto El tabo caballero"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoDiegoPablo}
            alt="foto artista Dacuzza"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoHallowen}
            alt="Foto en Halloween"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FutbolChoque}
            alt="Foto Futbol"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoSofi}
            alt="Foto gatita sofi"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoManuTatto}
            alt="Foto playa tatto"
          ></img>
        </div>
        <div>
          <img
            class="h-auto max-w-full rounded-lg"
            src={FotoEdinson}
            alt="Foto retrato"
          ></img>
        </div>
      </div>
    </>
  );
};
export default galery;
