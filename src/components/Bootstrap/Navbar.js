import React from "react";

const Navbar = ({ dark, children }) => {
  dark = !!dark ? "dark" : "light";
  return (
    <div>
      <nav className={`navbar navbar-${dark} bg-${dark}`}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">{children}</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
