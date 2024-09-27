import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <section className="about">
      <div className="about__section">
        <div className="about__section-text">
          <h2 className="about__section-title"> What The Park explained...</h2>
          <p className="about__section-p">
            As a driver I find it frustrating when you need to park and get on
            with your day, but you're presented with a confusing parking sign.
            Thats where the idea for What The Park came from. What The Park
            allows the user to take a picture of said confusing parking sign on
            the web app and then simplifies the parking sign. <br /> <br /> So
            there's no need anymore to wait around wasting your time trying to
            decode the sign, because WTP can do it for you!
          </p>
        </div>
      </div>
    </section>
  );
}
