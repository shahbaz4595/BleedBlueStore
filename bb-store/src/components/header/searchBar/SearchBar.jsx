const SearchBar = () => {
  return (
    <form className="nav-search-bar">
      <input
        type="text"
        className="nav-search-field"
        placeholder="Type to search..."
        autoComplete="off"
      />
      <a className="btn btn-nav-search" type="submit">
        <i className="fas fa-search"></i>
      </a>
    </form>
  );
};

export default SearchBar;
