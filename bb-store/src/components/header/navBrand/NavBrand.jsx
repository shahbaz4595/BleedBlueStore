import { Link } from "react-router-dom";

export const NavBrand = ({ navBrand }) => {
  const { brandImage, brandImageText, brandName } = navBrand;
 
  return (
    <Link to="/" className="navbar-brand">
      <div className="brand-logo">
        <img className="img-responsive" src={brandImage} alt={brandImageText} />
      </div>
      <p className="brand-name">{brandName}</p>
    </Link>
  );
};

