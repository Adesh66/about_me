import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuactive: false,
    };
  }

  toggleHandle = () => {
    console.log(this.state.menuactive);
    this.setState((prevstate) => ({
      menuactive: !prevstate.menuactive,
    }));
  };

  render() {
    return (
      <header className="header">
        <nav className="navbar">
          <div className="container">
            <div className="inner-header">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">
                  <span className="navbar-brand__break">A</span>desh
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right menu-list">
                  <li className="menu-list__item">
                    <Link className="menu-list__item__links" to="/">
                      About
                    </Link>
                  </li>
                  {/* <li className="menu-list__item">
                    <Link className="menu-list__item__links" to="/resume">
                      Resume
                    </Link>
                  </li> */}
                  <li className="menu-list__item">
                    <Link className="menu-list__item__links" to="/portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li className="menu-list__item menu-list__item--button">
                    <Link className="menu-list__item__links" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
