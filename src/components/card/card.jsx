import React, { useState } from "react";
import MePhoto from "../../assets/image/logoWOLF2F/mePhoto.jpeg";
import FotoLogoLetra from "../../assets/image/logoWOLF2F/PortadaWolf2f.png";

const Card = () => {
  const [isSmall, setIsSmall] = useState(false);

  const toggleSize = () => {
    setIsSmall(!isSmall);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 w-36 sm:w-auto h-${
        isSmall ? "12" : "48"
      } bg-[#FCFFDE] p-4 transition duration-300 ease-in-out transform hover:translate-y-[-2px] hover:shadow-lg`}
      style={{ zIndex: "9999" }} // Añadir zIndex para mantener el componente por encima de todo
    >
      {!isSmall && (
        <div className="flex flex-col justify-center items-center">
          <img
            src={MePhoto}
            alt="Esteban Wolff"
            className="w-12 h-12 rounded-full"
          />
          <div className="text-sm font-semibold text-center text-gray-700 mt-2">
            Esteban Wolff
          </div>
          <div className="text-xs text-center text-gray-500">
            CEO & Co-Founder
          </div>
        </div>
      )}
      {!isSmall && (
        <ul
          className={`flex justify-around w-full  ease-in-out transform translate-y-${
            isSmall ? "full" : "0"
          } hover:opacity-100`}
        >
          <li className="list-none">
            <a
              className="flex items-center text-white hover:text-gray-300"
              href="https://www.instagram.com/_wolf2f_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram transition-transform transform hover:translate-y-[-2px] text-gray-700"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </a>
          </li>
          <li className="list-none">
            <a
              className="flex items-center text-white hover:text-gray-300 mb-2"
              href="mailto:es.wolf2f@gmail.com"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-mail transition-transform transform hover:translate-y-[-2px] text-gray-700"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <path d="M3 7l9 6l9 -6" />
              </svg>
            </a>
          </li>
          <li className="list-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok transition-transform transform hover:translate-y-[-2px] text-gray-700"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
            </svg>
          </li>
        </ul>
      )}
      <div className="absolute top-2 right-2 flex items-center space-x-2">
        <button
          onClick={toggleSize}
          className="text-gray-500 hover:text-gray-700 focus:outline-none flex items-center space-x-1"
        >
          {isSmall ? (
            <>
              <img src={FotoLogoLetra} alt="Logo" className="w-24 h-12 mr-8" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-corner-right-up"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 18h6a3 3 0 0 0 3 -3v-10l-4 4m8 0l-4 -4" />
              </svg>
            </>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-corner-right-down"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 6h6a3 3 0 0 1 3 3v10l-4 -4m8 0l-4 4" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
export default Card;
