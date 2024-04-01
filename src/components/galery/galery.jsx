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
    <section className="w-full py-12 bg-white">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto text-black">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="grid gap-1">
            <h1 className="text-3xl font-bold tracking-tight">
              Type of photographs we offer:
            </h1>
            <p className="text-gray-500 dark:text-gray-500">
              Find the style of photography you are looking for:{" "}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="grid gap-4 relative group">
            <img
              alt="Sport"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={600}
              src={FutbolChoque}
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Sport</h3>
              <p className="text-sm leading-none">
                Photos of you or your team.
              </p>
            </div>
          </div>
          <div className="grid gap-4 relative group">
            <img
              alt="Running"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={600}
              src={FotoManu}
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Portrait</h3>
              <p className="text-sm leading-none">Customized portraits.</p>
            </div>
          </div>
          <div className="grid gap-4 relative group">
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={600}
              src={FotoCanela}
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Animals</h3>
              <p className="text-sm leading-none">
                Your pet deserves to be remembered.
              </p>
            </div>
          </div>
          <div className="grid gap-4 relative group">
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={600}
              src={FotoCiduadSantiago}
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Cities </h3>
              <p className="text-sm leading-none">Photos for your project.</p>
            </div>
          </div>
          <div className="grid gap-4 relative group">
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={600}
              src={FotoParque}
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Natural</h3>
              <p className="text-sm leading-none">Natural photos for you.</p>
            </div>
          </div>
          <div className="grid gap-4 relative group">
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={600}
              src={FotoAutoViejo}
              width={450}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Automobiles</h3>
              <p className="text-sm leading-none">
                Photos of your companion on wheels .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default galery;
