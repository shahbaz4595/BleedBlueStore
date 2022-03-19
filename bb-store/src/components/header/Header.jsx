import NavBrand from "./navBrand/NavBrand";
import NavMenu from "./navMenu/NavMenu";
import SearchBar from "./searchBar/SearchBar";
import './Header.css';

const Header = () => {
  return (
    <header className="navbar-section">
      <nav className="navbar light-bg shadow-dark">
        <NavBrand />
        <div className="nav-item-group">
          <SearchBar />
          <NavMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
