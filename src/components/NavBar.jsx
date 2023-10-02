import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img src="images/wowtruck-logo.png" alt="" />{" "}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink
                className={(isActive) => `nav-link ${isActive ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(isActive) => `nav-link ${isActive ? "active" : ""}`}
                aria-current="page"
                to="/book-now"
              >
                Book Now{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(isActive) => `nav-link ${isActive ? "active" : ""}`}
                to="/about-us"
              >
                About Us{" "}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={(isActive) => `nav-link ${isActive ? "active" : ""}`}
                to="/careers"
              >
                Careers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={(isActive) => `nav-link ${isActive ? "active" : ""}`}
                to="/contact-us"
              >
                Contact Us{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
