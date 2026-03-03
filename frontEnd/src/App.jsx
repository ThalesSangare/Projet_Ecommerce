import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import ListeProduits from "./components/ListeProduits.jsx";
import NavBar from "./components/NavBar.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<ListeProduits />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
