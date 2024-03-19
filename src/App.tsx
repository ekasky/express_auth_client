import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

export default function App() {

  return (
    <>
    
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>
    </>

  )
}

