import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Trayectoria from "./sections/Trayectoria/Trayectoria";
import Conocimientos from "./sections/Conocimientos/Conocimientos";
import Footer from "./sections/Footer/Footer";

import ContactoPage from "./Page/ContactoPage";


function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const section = location.state?.section;

    // Si no venimos desde Contacto,
    // no hacemos nada.
    if (!section) {
      return;
    }

    // Esperamos a que las secciones estén renderizadas.
    const timer = setTimeout(() => {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Trayectoria />
      <Conocimientos />
      <Footer />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/contacto"
          element={<ContactoPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
