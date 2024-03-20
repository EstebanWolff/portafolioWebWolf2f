import React from "react";

const Home = () => {
  return (
    <div className="navbar bg-[#000000]">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a
          translate="no"
          className="text-[#FCFFDE] transition duration-300 ease-in-out transform hover:translate-y-[-2px] btn btn-ghost text-xl text-white "
          href="https://www.wolf2f.com"
        >
          Wolf2f
        </a>
        <a
          translate="no"
          className="transition duration-300 ease-in-out transform hover:translate-y-[-2px] btn btn-ghost text-xl text-white "
          href="https://www.instagram.com/_wolf2f_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a className="transition duration-300 ease-in-out transform hover:translate-y-[-2px] btn btn-ghost text-xl text-white ">
          Contact
        </a>
        <a className="capitalize transition duration-300 ease-in-out transform hover:translate-y-[-2px] btn btn-ghost text-xl text-white ">
          Portfolio
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Home;
