import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope, FaYoutube, FaArrowDown, FaArrowUp } from "react-icons/fa";
import LogoWolf2f from "../../assets/image/logoWOLF2F/LogoWolf2f.png";

const MENU = [
  { name: "About Us", href: "#about", translate: true },
  { name: "Plans", href: "#plans", translate: true },
  { name: "Contact", href: "#contact", translate: true },
];

const SOCIALS = [
  { icon: <FaInstagram size={20} />, href: "https://instagram.com" },
  { icon: <FaEnvelope size={20} />, href: "mailto:example@gmail.com" },
  { icon: <FaYoutube size={20} />, href: "https://youtube.com" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  // Controla si el menú está abierto o cerrado

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
      ${scrolled ? "bg-[#000000] py-1" : "bg-transparent py-4"}`} // Cambié el padding cuando se hace scroll
    >
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl px-4">
        {/* Logo con animación solo en pantallas pequeñas */}
        <motion.div
          initial={{ x: 0, opacity: 1 }}
          animate={{
            x: isOpen ? -100 : 0, // Mueve el logo solo en pantalla pequeña
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-shrink-0 lg:static lg:transform-none"
        >
          <img src={LogoWolf2f} alt="Logo" className="h-20 mx-auto lg:mx-0" />
        </motion.div>

        {/* Menú de navegación, visible siempre en grande y animado en pequeño */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen || window.innerWidth >= 1024 ? 1 : 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className={`lg:flex items-center space-x-6 ${isOpen || window.innerWidth >= 1024 ? "flex" : "hidden"} lg:flex-row lg:mt-0`}
        >
          {MENU.map((menuItem) => (
            <motion.a
              key={menuItem.name}
              href={menuItem.href}
              className="text-white text-base hover:text-gray-300 transition"
            >
              {menuItem.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Social Icons, solo visibles en pantalla grande o cuando el menú está abierto */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isOpen || window.innerWidth >= 1024 ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className={`lg:flex items-center space-x-4 ${isOpen || window.innerWidth >= 1024 ? "flex" : "hidden"} lg:flex-row lg:mt-0`}
        >
          {SOCIALS.map((social, index) => (
            <a key={index} href={social.href} className="text-white hover:text-gray-300">
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Botón de flecha (mostrar/ocultar menú solo en pantallas pequeñas) */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white cursor-pointer absolute right-4 top-5"
        >
          {isOpen ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
