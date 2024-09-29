import "./HomePage.scss";
import React, { useState, useRef } from "react";
// import { IoCameraOutline } from "react-icons/io5";
import axios from "axios";
import { TbCapture } from "react-icons/tb";
import Webcam from "react-webcam";
import { BeatLoader } from "react-spinners";
import { HiOutlineRefresh } from "react-icons/hi";
import { Link } from "react-router-dom";
import parkingSign from "../../assets/images/parking.svg";

const apiUrl = import.meta.env.VITE_API_URL;

export default function HomePage({ themeClick, theme }) {
  const [showCamera, setShowCamera] = useState(false);
  const [image, setImage] = useState(null);
  const webRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [submit, setSubmit] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const camConstraints = {
    facingMode: { ideal: "environment" },
  };

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
    setSubmit(false);
    setLoading(true);
    setRefresh(true);
    if (image) {
      const response = await axios.post(`${apiUrl}/upload`, {
        imageData: image,
      });
      setLoading(false);
      setResponse(response.data.choices[0].message.content);
      console.log(response.data);
    }
  };

  const refreshPage = () => {
    window.location.reload();
    setRefresh(true);
  };

  return (
    <section className={`main ${theme === "dark" ? "main--dark" : ""}`}>
      {!showCamera && !image && (
        <h1 className="main__title"> Tap 'P' to find out </h1>
      )}
      <section className="cam">
        {showCamera && (
          <Webcam
            ref={webRef}
            alt="webcam screenshot"
            className="cam__webcam"
            videoConstraints={camConstraints}
          />
        )}
        {!showCamera && !image && (
          <div className="main__img-div">
            <img
              src={parkingSign}
              alt="parking sign"
              className="main__img-button"
              onClick={handleClick}
            />
            {/* <IoCameraOutline onClick={handleClick} className="main__img" /> */}
          </div>
        )}

        <section className="theme-toggle">
          <button onClick={themeClick} className="theme-toggle__button">
            {theme === "dark" ? "main--dark" : ""}
          </button>
        </section>

        <img src={image} className="cam__screenshot" />
        {showCamera && (
          <div className="cam__capture-div">
            <TbCapture
              className="cam__capture"
              onClick={() => {
                showImage();
              }}
            />
          </div>
        )}
        {image && !loading && submit && (
          <button
            className="cam__submit"
            onClick={() => {
              handleSubmitClick();
              setLoading();
            }}
          >
            Submit
          </button>
        )}
        <div className="loading-container">
          <BeatLoader
            color={"#031d26"}
            loading={loading}
            // cssOverride={{ paddding: 10 }}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        {/* )} */}
      </section>
      <section className="response">
        <div className="response__message">{response}</div>
        {refresh && (
          <Link to="/home" className="response__refresh">
            <HiOutlineRefresh
              onClick={refreshPage}
              className="response__refresh-icon"
            />
          </Link>
        )}
      </section>
    </section>
  );
}
