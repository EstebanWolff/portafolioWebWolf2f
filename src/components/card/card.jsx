import React from "react";
import fotoVictorVille from "../../assets/image/presentacion/victorVilleFoto.PNG";

const card = () => {
  return (
    <div>
      <h1 className="bg-white w-full flex flex-col justify-center items-center px-10 uppercase">
        DEVELOPING MY WEBSITE
      </h1>
      <img src={fotoVictorVille} alt="foto de victorVille CA" />
    </div>
  );
};

export default card;
