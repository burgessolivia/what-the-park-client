import "./HomePage.scss";
import camIcon from "../../assets/icons/camera.svg";

export default function HomePage() {
  return (
    <section className="main">
      <h1 className="main__title"> Tap to find out </h1>
      <div className="main__img-div">
        <img src={camIcon} alt="Camera Icon" className="main__img" />
      </div>
    </section>
  );
}
