import "@fontsource/open-sauce-sans";
import Navbar from "./components/layouts/navbar.jsx";
import Footer from "./components/layouts/footer.jsx";
import Galery from "./components/galery/galery.jsx"
import Carrousel from "./components/carrousel/carrousel.jsx";
import Card from "./components/card/card.jsx";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Galery/>
      <Footer />
    </div>
  );
}

export default App;
