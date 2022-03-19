import { useState } from "react";
import headerContent from "../content.json";

const NavMenu = () => {
  const [wishlistCount, setWishlistCount] = useState(1);
  const [cartCount, setCartCount] = useState(2);

  return (
    <ul className="navbar-menu">
      <li>
        <button id="burger-menu" className="btn-burger clickable">
          <i className="fas fa-bars text-md-size"></i>
        </button>
      </li>
      {headerContent.navmenu.map((item) => (
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

export default NavMenu;
