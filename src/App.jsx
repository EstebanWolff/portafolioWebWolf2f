import "@fontsource/open-sauce-sans";
import Navbar from "./components/layouts/navbar.jsx";
import Footer from "./components/layouts/footer.jsx";
import Galery from "./components/galery/galery.jsx";
import Carrousel from "./components/carrousel/carrousel.jsx";
import AboutUs from "./components/aboutUs/aboutUs.jsx";
import Card from "./components/card/card.jsx";
import Instagram from "./components/instagram/instagram.jsx";
import Contact from './components/contact/contact.jsx'

import FotoBackground from "./assets/image/logoWOLF2F/portadaColorBlack.png";

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Colocamos el fondo detrás de AboutUs */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${FotoBackground})`,
          zIndex: -1,
          height: "full", // Ajusta el tamaño según sea necesario
          width: "full", // Ajusta el tamaño según sea necesario
          position: "fixed", // Hacemos que el fondo tenga un índice Z menor que los demás componentes
        }}
      ></div>
      {/* Luego, los demás componentes */}
      <Card />
      <Navbar />
      <Carrousel />
      <Instagram />
      <AboutUs style={{ position: "relative", zIndex: 1 }} />{" "}
      {/* Sobreponemos AboutUs sobre el fondo */}
      <Galery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
