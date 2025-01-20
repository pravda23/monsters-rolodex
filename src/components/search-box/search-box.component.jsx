import "./search-box.styles.css";
import "../../App.css";

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div className="fixed-top">
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default SearchBox;
