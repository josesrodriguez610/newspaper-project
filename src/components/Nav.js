import NavOptions from "./NavOptions";

const Nav = ({ options }) => {
  return (
    <div className="nav">
      <div className="nav-container">
        <h1 className="nav-title">THE NEWSPAPER</h1>
        <NavOptions options={options} />
      </div>
    </div>
  );
};

export default Nav;
