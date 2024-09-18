import "./App.css";
import { BrowserRouter, Navigate, Routes } from "react-router-dom";
// import HomePage
// import UploadPage
// import AboutPage

export default function App() {
  return (
    <BrowserRouter>
      {/* import header */}
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {/* import footer  */}
    </BrowserRouter>
  );
}
