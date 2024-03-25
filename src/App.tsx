import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import AllCategories from "./pages/AllCategories";


export default function App() {

  return (
    <>
    
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-categories" element={<AllCategories />} />

      </Routes>
    </>

  )
}

