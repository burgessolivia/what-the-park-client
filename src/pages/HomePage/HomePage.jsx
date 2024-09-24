import "./HomePage.scss";
import React, { useState, useRef } from "react";
// import Camera from "../../components/Camera/Camera";
import { IoCameraOutline } from "react-icons/io5";
import axios from "axios";
import { TbCapture } from "react-icons/tb";
import Webcam from "react-webcam";

const apiUrl = import.meta.env.VITE_API_URL;

export default function HomePage() {
  const [showCamera, setShowCamera] = useState(false);
  const [image, setImage] = useState(null);
  const webRef = useRef(null);

  const showImage = () => {
    if (webRef.current) {
      const screenshot = webRef.current.getScreenshot();
      setImage(screenshot);
      setShowCamera(false);
      console.log(screenshot);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    setShowCamera(!showCamera);
    setImage(null);
  };

  const handleSubmitClick = async () => {
    if (image) {
      const response = await axios.post(`${apiUrl}/upload`, {
        imageData: image,
      });
      console.log(response.data);
    }
  };

  return (
    <section className="main">
      <h1 className="main__title"> Tap to find out </h1>
      <section className="cam">
        {showCamera && (
          <Webcam ref={webRef} alt="webcam screenshot" height={540} />
        )}
        {!showCamera && !image && (
          <IoCameraOutline onClick={handleClick} className="main__img" />
        )}
        <img src={image} />
        {showCamera && (
          <TbCapture
            onClick={() => {
              showImage();
            }}
          />
        )}
        {image && (
          <button className="cam__submit" onClick={handleSubmitClick}>
            Submit
          </button>
        )}
        {/* </div> */}
      </section>
    </section>
  );
}
