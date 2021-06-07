import { FaSearch } from "react-icons/fa";

const NavOptions = ({ options, setModalBool }) => {
  return (
    <div className="navOptions">
      {options.map((option) => (
        <span className="navOptions-option">{option.toUpperCase()}</span>
      ))}
      <span
        className="navOptions-option search"
        onClick={() => setModalBool(true)}
      >
        Subscribe
      </span>
      <div className="navOptions-search">
        <FaSearch className="navOptions-option search" />
      </div>
    </div>
  );
};

export default NavOptions;
