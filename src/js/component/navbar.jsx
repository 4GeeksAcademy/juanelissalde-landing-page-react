import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid col-10">
        <a className="navbar-brand text-white-50" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-white-50" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white-50" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;