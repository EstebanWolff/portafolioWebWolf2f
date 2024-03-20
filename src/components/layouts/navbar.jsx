import React from "react";

const Home = () => {
  return (
    <div className="navbar bg-[#000000] py-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        <div className="navbar-start"></div>
        <div className="navbar-center flex justify-center items-center">
          <a
            translate="no"
            className="text-[#FCFFDE]  transition duration-300 ease-in-out transform hover:translate-y-[-2px] btn btn-ghost text-xl text-white m-2"
            href="https://www.wolf2f.com"
          >
            Wolf2f
          </a>
          <a
            translate="no"
            className="text-white text-white hover:text-[#FCFFDE] transition duration-300 ease-in-out transform hover:translate-y-[-2px] btn btn-ghost text-xl text-white m-2"
            href="https://www.instagram.com/_wolf2f_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a className="text-white text-white hover:text-[#FCFFDE] transition duration-300 ease-in-out transform hover:translate-y-[-2px] btn btn-ghost text-xl text-white m-2">
            Contact
          </a>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Home;
