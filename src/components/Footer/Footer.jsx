import "./Footer.scss";
import gitHub from "../../assets/icons/github.svg";
import linkedIn from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <section className="footer">
      <a href="https://github.com/burgessolivia">
        <img src={gitHub} alt="github icon" className="footer__img-git" />
      </a>
      <a href="https://linkedin.com/in/oliveburgess">
        <img
          src={linkedIn}
          alt="linkedIn icon"
          className="footer__img-linked"
        />
      </a>
    </section>
  );
}
