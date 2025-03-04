import React, { useState, useEffect } from "react";
import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";
import LogoWolf2f from "../../assets/image/logoWOLF2F/LogoWolf2f.png";

const MENU = [
  { name: "About Us", href: "#about", translate: true },
  { name: "Services", href: "#services", translate: true },
  { name: "Contact", href: "#contact", translate: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md 
      ${scrolled ? "bg-[#000000] py-1" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl px-4 relative">

        {/* Logo, sin movimiento y dentro del flujo del navbar */}
        <div className="flex-shrink-0 lg:static lg:transform-none">
          <img src={LogoWolf2f} alt="Logo" className="h-20 mx-auto lg:mx-0" />
        </div>

        {/* Menú de navegación, solo visible en pantallas grandes */}
        <div className={`lg:flex items-center space-x-6 ${window.innerWidth >= 1024 ? "flex" : "hidden"} lg:flex-row lg:mt-0`}>
          {MENU.map((menuItem) => (
            <a
              key={menuItem.name}
              href={menuItem.href}
              className="text-white text-base hover:text-gray-300 transition"
            >
              {menuItem.name}
            </a>
          ))}
        </div>

        {/* Social Icons, centrados entre el logo y el menú */}
        <div className="flex lg:flex-row items-center space-x-4 absolute left-1/2 transform -translate-x-1/2 z-20 justify-center lg:static">
          <a href="https://www.instagram.com/_wolf2f_/" target="_blank" className="text-white hover:text-gray-300">
            <FaInstagram size={20} />
          </a>
          <a href="mailto:example@gmail.com" target="_blank" className="text-white hover:text-gray-300">
            <FaEnvelope size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" className="text-white hover:text-gray-300">
            <FaYoutube size={20} />
          </a>
        </div>

        {/* Dropdown solo visible en pantallas pequeñas */}
        <div className="dropdown lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)} // Toggle el estado del dropdown
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>

          {/* Menú desplegable con las opciones en pantallas pequeñas */}
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content bg-[#FCFFDE] rounded-box z-1 mt-3 w-52 p-2 shadow ${isOpen ? 'block' : 'hidden'}`}
            style={{ right: "0" }}
          >
            {MENU.map((menuItem) => (
              <li key={menuItem.name}>
                <a 
                  href={menuItem.href} 
                  className="text-black hover:text-[#333333] transition-colors duration-200"
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
