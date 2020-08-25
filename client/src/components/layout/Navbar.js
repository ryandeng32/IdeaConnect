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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/code">Code</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Navbar;
