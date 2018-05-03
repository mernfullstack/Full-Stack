import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <b className="logo" >Redux</b>
              </a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="signup">
                  <span className="glyphicon glyphicon-user" /> Sign Up
                </Link>
              </li>
              <li>
                <Link to="/">
                  <span className="glyphicon glyphicon-log-in" /> Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Header;
