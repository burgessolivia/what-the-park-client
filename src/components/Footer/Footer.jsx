import "./Footer.scss";
import { Link } from "react-router-dom";
import gitHub from "../../assets/icons/github.svg";
import linkedIn from "../../assets/icons/linkedin.svg";

export default function Footer() {
  return (
    <section className="footer">
      <Link href="github.com/burgessolivia">
        <img src={gitHub} alt="github icon" className="footer__img-git" />
      </Link>
      <Link href="linkedin.com/in/oliveburgess">
        <img
          src={linkedIn}
          alt="linkedIn icon"
          className="footer__img-linked"
        />
      </Link>
    </section>
  );
}
