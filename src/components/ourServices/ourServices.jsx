import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Photography",
    description:
      "Capture the essence of your brand with high-quality visuals that leave a lasting impression.",
    icon: "camera",
  },
  {
    title: "Web Design",
    description:
      "Engaging, modern, and responsive websites that provide seamless user experiences.",
    icon: "world-www",
  },
  {
    title: "Social Media",
    description:
      "Strategic social media management that enhances brand presence and audience engagement.",
    icon: "brand-instagram",
  },
  {
    title: "Data Science",
    description: "We analyze your data to improve your business decisions.",
    icon: "database",
  },
  {
    title: "Branding",
    description: "We help define your brand identity for a lasting impact.",
    icon: "brush",
  },
  {
    title: "Videos",
    description: "We create high-quality videos to showcase your brand effectively.",
    icon: "video",
  },
];

const OurServices = () => {
  const [animateKey, setAnimateKey] = useState(0);

  // Re-trigger animation every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateKey((prevKey) => prevKey + 1); // Update key to trigger re-render
    }, 20000); // 20 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="flex-1 overflow-y-auto">
      <div className="bg-black py-12 pb-36">
        <div className="container mx-auto px-4 text-center text-[#FCFFDE] md:px-6">
          {/* Animación de título y descripción */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4 mb-10"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-[700px] md:text-xl">
              Discover the solutions we offer to boost your brand and connect with your audience.
            </p>
          </motion.div>

          {/* Grid de servicios con animación */}
          <motion.div key={animateKey}> {/* Re-trigger animation for services */}
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="space-y-4 p-6 bg-[#1a1a1a] rounded-lg shadow-lg"
                  whileHover={{
                    backgroundColor: "#333333", // Color ligeramente más claro
                    scale: 1.05, // Escala para el hover
                    transition: { duration: 0.3 },
                  }}
                >
                  {/* Ícono con animación */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FCFFDE] mx-auto"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <use href={`https://tabler-icons.io/static/tabler-icons/${service.icon}.svg`} />
                    </svg>
                  </motion.div>

                  {/* Título con animación */}
                  <motion.h3
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.4 }}
                    className="font-bold text-lg"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Descripción con animación */}
                  <motion.p
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.5 }}
                    className="text-sm text-zinc-300"
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
