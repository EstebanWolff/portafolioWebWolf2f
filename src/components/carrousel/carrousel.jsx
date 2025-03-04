import React from "react";
import { motion } from "framer-motion";
import Fondo from "../../assets/image/logoWOLF2F/Fondo.png"; // Importa la imagen

const Carrousel = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col sm:flex-row items-center justify-center bg-black px-6"
      style={{
        backgroundImage: `url(${Fondo})`, // Establece la imagen de fondo
        backgroundSize: '120%', // Imagen más pequeña
        backgroundPosition: 'center', // Centra la imagen
        animation: 'moveBackground 5s ease-in-out infinite', // Animación para mover el fondo
      }}
    >
      {/* Contenido de texto */}
      <motion.div
        className="relative z-10 text-[#FCFFDE] text-center max-w-[600px] flex flex-col items-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter">
          Welcome to Wolf2f
        </h1>
        <p className="mt-4 text-base lg:text-lg">
          "Capturing moments, creating memories. With Wolf2f, your story comes to life!"
        </p>
        <a
          className="mt-4 inline-flex h-11 items-center rounded-md border border-gray-200 bg-black px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900"
          href="#"
        >
          We offer
        </a>
      </motion.div>
    </section>
  );
};

export default Carrousel;
