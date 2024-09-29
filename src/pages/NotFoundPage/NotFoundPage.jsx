import React from "react";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <section className="error">
      <h3 className="error__title"> 404 - page not found</h3>
      <p className="error__p"> The page you are looking for does not exist</p>
    </section>
  );
}
