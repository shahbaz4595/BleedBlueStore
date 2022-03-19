import footerContent from "./content.json";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="dark-bg padder-vh-xl light-text">
      <div className="footer-grid">
        <div className="footer-column footer-company-column">
          <div className="footer-logo">
            <div className="brand-logo">
              <img
                className="img-responsive"
                src={footerContent.footerBrand.brandImage}
                alt={footerContent.footerBrand.brandImageText}
              />
            </div>
            <p className="text-md-size text-bold-weight">
              {footerContent.footerBrand.brandName}
            </p>
          </div>
          <p>Address: {footerContent.footerBrand.address}</p>
          <ul className="list-reset gutter-vh-lg flex-row gap-md">
            {footerContent.socialMedia.map((item) => (
              <li className="list-inline" key={item.id}>
                <a href={item.link} target="_blank" className="light-text">
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
          <p> &copy; All rights reserved</p>
        </div>

        <div className="footer-row">
          {footerContent.footerLinks.map((item) => (
            <div className="footer-link" key={item.id}>
              <a href={item.link} className="light-text">
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
