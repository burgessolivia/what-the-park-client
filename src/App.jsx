import "./App.scss";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const themeClick = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header themeClick={themeClick} theme={theme} />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/home" themeClick={themeClick} theme={theme} />
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
