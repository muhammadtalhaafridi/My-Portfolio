import { Route, Routes } from "react-router-dom";
import Home_Page from "./Pages/Home-Page";

import Navbar from "./components/Navbar";
import About from "./Pages/About-Page";
import Project from "./Pages/Project-Page";
import Experience from "./Pages/Experience-Page";
import ProjecDetails from "./Pages/Project-Details-Page";
import Footer from "./components/Footer";
import Contact from "./Pages/Contact-Page";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home_Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjecDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
