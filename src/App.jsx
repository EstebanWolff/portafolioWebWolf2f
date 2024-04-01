import React from "react";
import Navbar from "./components/layouts/navbar.jsx";
import Footer from "./components/layouts/footer.jsx";
import Galery from "./components/galery/galery.jsx";
import Carrousel from "./components/carrousel/carrousel.jsx";
import AboutUs from "./components/aboutUs/aboutUs.jsx";
import Card from "./components/card/card.jsx";
import Instagram from "./components/instagram/instagram.jsx";
import Contact from "./components/contact/contact.jsx";
import OurServices from "./components/ourServices/ourServices.jsx";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Carrousel />
        <OurServices />
        <AboutUs />
        <Galery />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
