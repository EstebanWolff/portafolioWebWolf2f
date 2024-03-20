import React from "react";
import SimpleWhiteFoto from "../../assets/image/logoWOLF2F/simpleWhite.png";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white py-6  bottom-0 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Columna 1: Wolf2f */}
        <div className="flex flex-col items-center">
          <p
            translate="no"
            className="font-bold text-lg mb-4 text-[#FCFFDE] hover:text-white"
          >
            Wolf2f
          </p>
          <img
            src={SimpleWhiteFoto}
            alt="Logo de Wolf2f"
            className="w-24 h-24 rounded-full"
          />
        </div>

        {/* Columna 2: Descripción */}
        <div className="text-sm mr-12 ml-4">
          <p className="font-bold text-lg text-[#FCFFDE] hover:text-white">
            Description
          </p>
          <p className="mt-4">
            At Wolf2f, we fuse the creativity of photography, the power of
            audiovisual projects, and the precision of web development with an
            overflowing passion. To bring each project to life with a unique and
            memorable touch.
          </p>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div className="flex flex-col items-start ml-4">
          <p className="font-bold text-lg mb-4 text-[#FCFFDE] hover:text-white">
            Socials Media
          </p>

          <a
            className="flex items-center text-white text-white hover:text-[#FCFFDE] mb-2"
            href="tel:+14422856391"
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-phone ml-0 w-8 h-8"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
            </svg>
            <p className="ml-2 text-white hover:text-[#FCFFDE]">
              +1 (442) 285 6391
            </p>
          </a>

          <a
            className="flex items-center text-white text-white hover:text-[#FCFFDE]  mb-2"
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-mail ml-0 w-8 h-8"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
              <path d="M3 7l9 6l9 -6"></path>
            </svg>
            <p className="ml-2">es.wolf2f@gmail.com</p>
          </a>

          <a
            className="flex items-center text-white text-white hover:text-[#FCFFDE]"
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram ml-0 w-8 h-8"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M16.5 7.5l0 .01"></path>
            </svg>
            <p translate="no" className="ml-2">
              _Wolf2f_
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
