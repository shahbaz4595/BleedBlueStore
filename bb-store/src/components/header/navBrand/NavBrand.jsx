<<<<<<< HEAD
export const NavBrand = ({ navBrand }) => {
  const { brandImage, brandImageText, brandName } = navBrand;
  return (
    <a href="" className="navbar-brand">
      <div className="brand-logo">
        <img className="img-responsive" src={brandImage} alt={brandImageText} />
      </div>
      <p className="brand-name">{brandName}</p>
=======
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
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
    </a>
  );
};

<<<<<<< HEAD

=======
export default NavBrand;
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
