import { NavBrand, NavMenu, SearchBar } from "../../BleedBlueStore";
import headerContent from "./content.json";
import "./Header.css";

export const Header = () => {
  const { navBrand, navMenu } = headerContent;

  return (
    <header className="navbar-section">
      <nav className="navbar light-bg shadow-dark">
        <NavBrand navBrand={navBrand} />
        <div className="nav-item-group">
          <SearchBar />
          <NavMenu navMenu={navMenu} />
        </div>
      </nav>
    </header>
  );
};
