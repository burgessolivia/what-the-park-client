import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { TbCapture } from "react-icons/tb";

export default function Camera({ setImage, setShowCamera }) {
  const webRef = useRef(null);

  const showImage = () => {
    if (webRef.current) {
      const screenshot = webRef.current.getScreenshot();
      setImage(screenshot);
      setShowCamera(false);
      console.log(screenshot);
    }
  };

  const handleSubmitClick = async (imageScreenshot) => {
    if (image) {
      const response = await axios.post(`${apiUrl}/upload`, {
        imageData: image,
      });
      console.log(response.data);
    }
  };

  return (
    <section className="cam">
      <Webcam ref={webRef} alt="webcam screenshot" height={540} />
      {/* <button
        onClick={() => {
          showImage();
        }}
      >
        Show image in console
      </button> */}

      <TbCapture
        onClick={() => {
          showImage();
        }}
      />
      <button className="cam__submit" onClick={handleSubmitClick}>
        Submit
      </button>
    </section>
  );
}
