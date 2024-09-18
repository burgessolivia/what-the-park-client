import "./App.scss";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
// import HomePage
// import UploadPage
// import AboutPage

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        {/* <Route path="/home" element={<HomePage />} /> */}
        {/* <Route path="/upload" element={<UploadPage />} /> */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
      {/* import footer  */}
    </BrowserRouter>
  );
}
