export const NavBrand = ({ navBrand }) => {
  const { brandImage, brandImageText, brandName } = navBrand;
  return (
    <a href="" className="navbar-brand">
      <div className="brand-logo">
        <img className="img-responsive" src={brandImage} alt={brandImageText} />
      </div>
      <p className="brand-name">{brandName}</p>
    </a>
  );
};


