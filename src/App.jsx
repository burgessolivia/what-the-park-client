import "./App.scss";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import AboutPage

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/about" element={<about />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
