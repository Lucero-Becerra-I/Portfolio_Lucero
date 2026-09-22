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

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const sectionId = location.hash.substring(1);

    const timer = setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}

function HomePage() {
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
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar />

      <ScrollToSection />

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
