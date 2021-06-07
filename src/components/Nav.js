import NavOptions from "./NavOptions";

const Nav = ({ options, setModalBool }) => {
  return (
    <div className="nav">
      <div className="nav-container">
        <h1 className="nav-title">THE DAILY</h1>
        <NavOptions options={options} setModalBool={setModalBool} />
      </div>
    </div>
  );
};

export default Nav;
