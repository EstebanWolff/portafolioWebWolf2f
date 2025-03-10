import React from "react";
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
              Find the style of photography you are looking for:
            </p>
          </div>
        </div>
        {/* Grid de las cartas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Carta 1 */}
          <div className="grid gap-4 relative group max-w-xs sm:max-w-xs mx-auto">
            <img
              alt="Sport"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={300}
              src={FutbolChoque}
              width={225}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Sport</h3>
              <p className="text-sm leading-none">Photos of you or your team.</p>
            </div>
          </div>
          {/* Carta 2 */}
          <div className="grid gap-4 relative group max-w-xs sm:max-w-xs mx-auto">
            <img
              alt="Running"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={300}
              src={FotoManu}
              width={225}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Portrait</h3>
              <p className="text-sm leading-none">Customized portraits.</p>
            </div>
          </div>
          {/* Carta 3 */}
          <div className="grid gap-4 relative group max-w-xs sm:max-w-xs mx-auto">
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={300}
              src={FotoCanela}
              width={225}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Animals</h3>
              <p className="text-sm leading-none">Your pet deserves to be remembered.</p>
            </div>
          </div>
          {/* Carta 4 */}
          <div className="grid gap-4 relative group max-w-xs sm:max-w-xs mx-auto">
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={300}
              src={FotoCiduadSantiago}
              width={225}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Cities</h3>
              <p className="text-sm leading-none">Photos for your project.</p>
            </div>
          </div>
          {/* Carta 5 */}
          <div className="grid gap-4 relative group max-w-xs sm:max-w-xs mx-auto">
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={300}
              src={FotoParque}
              width={225}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Natural</h3>
              <p className="text-sm leading-none">Natural photos for you.</p>
            </div>
          </div>
          {/* Carta 6 */}
          <div className="grid gap-4 relative group max-w-xs sm:max-w-xs mx-auto">
            <img
              alt="Football"
              className="rounded-lg object-cover w-full aspect-[3/4] group-hover:opacity-50 transition-opacity"
              height={300}
              src={FotoAutoViejo}
              width={225}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Automobiles</h3>
              <p className="text-sm leading-none">Photos of your companion on wheels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default galery;
