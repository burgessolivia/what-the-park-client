import "./HomePage.scss";
import React, { useState } from "react";
import Camera from "../../components/Camera/Camera";
import { IoCameraOutline } from "react-icons/io5";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL; // Access the API URL from .env

export default function HomePage() {
  const [showCamera, setShowCamera] = useState(false);
  const [image, setImage] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setShowCamera(!showCamera);
    setImage(null);
  };

  return (
    <section className="main">
      <h1 className="main__title"> Tap to find out </h1>
      {/* <button onClick={handleClick} className="main__button">
        show camera
      </button> */}
      <div className="main__img-div">
        {showCamera && (
          <Camera setImage={setImage} setShowCamera={setShowCamera} />
        )}
        <IoCameraOutline onClick={handleClick} className="main__img" />
      </div>
      <img src={image} />
    </section>
  );
}
