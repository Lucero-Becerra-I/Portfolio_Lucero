import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./sections/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Trayectoria from "./sections/Trayectoria/Trayectoria";
import Conocimientos from "./sections/Conocimientos/Conocimientos";
import Footer from "./sections/Footer/Footer";

import ContactoPage from "./Page/ContactoPage";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Trayectoria />
              <Conocimientos />
              <Footer />
            </>
          }
        />

        {/* Página de contacto */}
        <Route
          path="/contacto"
          element={<ContactoPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;