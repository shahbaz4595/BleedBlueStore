import "./Hero.css";
import { Link } from "react-router-dom";

export const Hero = ({ heroContent }) => {
  const { image, imageText, title, cta_title } = heroContent;
  return (
    <section className="cover-container">
      <div className="landing-page-cover">
        <img
          loading="lazy"
          className="img-responsive cover-image"
          src={image}
          alt={imageText}
        />
        <div className="cover-text">
          <h1 className="light-text"> {title} </h1>
          <Link to="/shop" className="btn btn-light btn-explore">
            {cta_title}
          </Link>
        </div>
      </div>
    </section>
  );
};

