import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

export default function App() {

  return (
    
    <Routes>

      <Route path="/" element={<Home />} />

    </Routes>

  )
}

