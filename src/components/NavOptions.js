import { FaSearch } from "react-icons/fa";

const NavOptions = ({ options }) => {
  return (
    <div className="navOptions">
      {options.map((option) => (
        <span className="navOptions-option">{option.toUpperCase()}</span>
      ))}
      <div className="navOptions-search">
        <FaSearch className="navOptions-option search" />
      </div>
    </div>
  );
};

export default NavOptions;
