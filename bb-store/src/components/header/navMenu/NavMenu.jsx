import { useState } from "react";
<<<<<<< HEAD

export const NavMenu = ({ navMenu }) => {
=======
import headerContent from "../content.json";

const NavMenu = () => {
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
  const [wishlistCount, setWishlistCount] = useState(1);
  const [cartCount, setCartCount] = useState(2);

  return (
    <ul className="navbar-menu">
      <li>
        <button id="burger-menu" className="btn-burger clickable">
          <i className="fas fa-bars text-md-size"></i>
        </button>
      </li>
<<<<<<< HEAD
      {navMenu.map((item) => (
=======
      {headerContent.navmenu.map((item) => (
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
        <li key={item.id}>
          <a
            href={item.link}
            className="icon-badge-container"
            title={item.title}
          >
            <i className={item.icon}>
              {item.hasBadge && (
                <span className="icon-badge">
                  {item.id === 3 ? wishlistCount : cartCount}
                </span>
              )}
            </i>
          </a>
        </li>
      ))}
    </ul>
  );
};

<<<<<<< HEAD

=======
export default NavMenu;
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
