import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="row nav">
        <div className="col-sm-12">
          <div className="col-sm-3">
            <h1 className="heading">Redux</h1>
          </div>
          <div className="col-sm-3">
          
          </div>
          <div className="col-sm-4">
          
          </div>
          <div className="col-sm-1">
            <Link to="/signup"><h2 className="signup">Signup</h2></Link>
          </div>
          <div className="col-sm-1">
            <Link to="/"><h2 className="login">Login</h2></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
