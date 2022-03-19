import heroContent from "./content.json";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="cover-container">
      <div className="landing-page-cover">
        <img
          loading="lazy"
          className="img-responsive cover-image"
          src={heroContent.hero.image}
          alt={heroContent.hero.imageText}
        />
        <div className="cover-text">
          <h1 className="light-text"> {heroContent.hero.title} </h1>
          <a href="/product.html" className="btn btn-light btn-explore">
            {heroContent.hero.cta_title}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
