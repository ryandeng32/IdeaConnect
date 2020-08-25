import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <Fragment>
      <nav className={"navbar nav-dark"}>
        <h1>
          <Link to="/">
            <i className="far fa-lightbulb"></i>IdeaConnect
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/create-idea">
              <i className="fas fa-plus"></i>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/ryandeng32/IdeaConnect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Navbar;
