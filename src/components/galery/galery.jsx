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
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10 mt-10">
      <div>
        <img class="h-auto max-w-full rounded-lg" src={FotoCanela} alt=""></img>
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src={FotoManu} alt=""></img>
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={FotoAutoViejo}
          alt=""
        ></img>
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src={FotoParque} alt=""></img>
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={FotoCiduadSantiago}
          alt=""
        ></img>
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={FotoCaballero}
          alt=""
        ></img>
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={FotoDiegoPablo}
          alt=""
        ></img>
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={FotoHallowen}
          alt=""
        ></img>
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={FutbolChoque}
          alt=""
        ></img>
      </div>
      <div>
        <img class="h-auto max-w-full rounded-lg" src={FotoSofi} alt=""></img>
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={FotoManuTatto}
          alt=""
        ></img>
      </div>
      <div>
        <img
          class="h-auto max-w-full rounded-lg"
          src={FotoEdinson}
          alt=""
        ></img>
      </div>
    </div>
  );
};
export default galery;
