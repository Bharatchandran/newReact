import React from "react";

const Navbar = ({ dark, children, toggleNav }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <div>
      <nav className={`navbar navbar-expand navbar-${dark} bg-${dark}`}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{children}</span>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About Me
              </a>
              <span className="nav-link nav-action" onClick={toggleNav}>
                Toggle Nav
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
