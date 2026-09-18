import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Trayectoria from "./sections/Trayectoria/Trayectoria";
import Conocimientos from "./sections/Conocimientos/Conocimientos";
import Footer from "./sections/Footer/Footer";

import ContactoPage from "./Page/ContactoPage";


function isPageReload() {
  const navEntries = performance.getEntriesByType("navigation");

  if (navEntries.length > 0) {
    return navEntries[0].type === "reload";
  }

  return false;
}


// Guarda la posición de scroll de cada página
// mientras el usuario navega.
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const key = `scrollY:${location.pathname}`;

    const handleScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return null;
}


function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const section = location.state?.section;

    // Si venimos desde Contacto, vamos a esa sección puntual.
    if (section) {
      const timer = setTimeout(() => {
        const element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        navigate(location.pathname, { replace: true, state: {} });
      }, 50);

      return () => clearTimeout(timer);
    }

    // Si no venimos de Contacto y esto es un reload real,
    // restauramos la posición guardada.
    if (isPageReload()) {
      const saved = sessionStorage.getItem(`scrollY:${location.pathname}`);

      if (saved) {
        const timer = setTimeout(() => {
          window.scrollTo({
            top: parseInt(saved, 10),
            behavior: "auto",
          });
        }, 50);

        return () => clearTimeout(timer);
      }
    }
  }, [location, navigate]);

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
  useEffect(() => {
    // Apagamos la restauración automática del navegador:
    // ahora la posición de scroll la controlamos nosotros.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <BrowserRouter>

      <Navbar />
      <ScrollManager />

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