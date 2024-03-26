import { Routes, Route } from "react-router-dom";
import { programmingComponents, websiteDevelopmentComponents, projectComponents } from "./navItems";

// Components
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import AllCategories from "./pages/AllCategories";
import GettingStartedWebDev from "./pages/webdev/GettingStartedWebDev";
import NotFound from "./pages/NotFound";


export default function App() {

  return (
    <>
    
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/webdev-getting-started" element={<GettingStartedWebDev />} />

        
        { /* Project Routes */ }
        { projectComponents.map((route, key) => (

          <Route key={key} path={route.href} element={route.page} />

        ))}

        { /* Webdev Routes */ }
        { websiteDevelopmentComponents.map((route, key) => (

          <Route key={key} path={route.href} element={route.page} />

        ))}

        { /* Programming Routes */ }
        { programmingComponents.map((route, key) => (

          <Route key={key} path={route.href} element={route.page} />

        ))}

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>

  )
}

