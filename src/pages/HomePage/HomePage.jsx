import "./HomePage.scss";
import { IoCameraOutline } from "react-icons/io5";
import Webcam from "react-webcam";
import React, { useState } from "react";
import { useRef } from "react";

export default function HomePage() {
  const webRef = useRef(null);
  const [image, setImage] = useState(null);
  const showImage = () => {
    if (webRef.current) {
      const screenshot = webRef.current.getScreenshot();
      setImage(screenshot); // Set the screenshot as the image source
      console.log(screenshot); // Log the image data (base64 encoded)
    }
  };

  return (
    <section className="main">
      <h1 className="main__title"> Tap to find out </h1>
      <div className="main__img-div">
        {/* <IoCameraOutline className="main__img"> */}
        {/* <CameraComponent /> */}
        {/* <WebcamComponent /> */}
        {/* </IoCameraOutline> */}
        <Webcam ref={webRef} alt="webcam screenshot" />
        <button
          onClick={() => {
            showImage();
          }}
        >
          Show image in console
        </button>
        <img src={image} />
      </div>
    </section>
  );
}
