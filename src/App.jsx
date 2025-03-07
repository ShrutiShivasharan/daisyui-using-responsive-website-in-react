import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { themeColors, applyTheme } from "./theme";
import Home from "./Home";
import Product from './Product'
const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <>
      <div className={`min-h-screen transition-all duration-300 ${themeColors[theme]}`}>
        <Router>
          <Navbar setTheme={setTheme} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
