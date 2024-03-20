import React from "react";
import FotoVictorVille from "../../assets/image/presentacion/victorVilleFoto.PNG";

const Carrousel = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        alt="Background"
        className="object-cover object-center w-full h-full"
        src={FotoVictorVille}
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center bg-black/40">
        <div className="mb-6 max-w-[700px] text-[#FCFFDE]">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">
            Welcome to Wolf2f
          </h1>
          <p className="mt-6 text-base lg:text-lg">
            "Capturing moments, creating memories. With Wolf2f, your story comes
            to life!"
          </p>
        </div>
        <a
          className="text-white mb-4 inline-flex h-11 items-center rounded-md border border-gray-200 bg-black px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
          href="#"
        >
          We offer
        </a>
      </div>
    </section>
  );
};

export default Carrousel;
