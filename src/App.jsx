import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Societe from "./components/Societe/Societe.jsx";
import Help from "./components/Help/Help.jsx";
import Faqs from "./components/Faqs/Faqs.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Maps from "./components/Maps/Maps.jsx"
import Detaille from "./components/Detaille/Detaille.jsx"
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (

<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<>
      <Accueil />
      <Services />
      <Societe />
      <Help />
      <Faqs />
      <Maps />
    </>} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Detaille" element={<Detaille />} />
  </Routes>
  <Footer />
</BrowserRouter>

  
     
   
  );
};

export default App;
