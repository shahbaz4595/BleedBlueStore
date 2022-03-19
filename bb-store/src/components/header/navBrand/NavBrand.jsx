import headerContent from "../content.json";

const NavBrand = () => {
  return (
    <a href="" className="navbar-brand">
      <div className="brand-logo">
        <img
          className="img-responsive"
          src={headerContent.navbrand.brandImage}
          alt={headerContent.navbrand.brandImageText}
        />
      </div>
      <p className="brand-name">{headerContent.navbrand.brandName}</p>
    </a>
  );
};

export default NavBrand;
