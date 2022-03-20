<<<<<<< HEAD
import { NavBrand, NavMenu, SearchBar } from "../../BleedBlueStore";
import headerContent from './content.json';
import './Header.css';

export const Header = () => {

  const { navBrand, navMenu } = headerContent;

  return (
    <header className="navbar-section">
      <nav className="navbar light-bg shadow-dark">
        <NavBrand navBrand={navBrand} />
        <div className="nav-item-group">
          <SearchBar />
          <NavMenu navMenu={navMenu} />
=======
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
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
        </div>
      </nav>
    </header>
  );
};

<<<<<<< HEAD

=======
export default Header;
>>>>>>> 1fcb4070a2c175ce60978b057582ef2dc935113d
