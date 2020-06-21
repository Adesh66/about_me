import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
      <header className='header'>
        <div className='navigation-menu'>
          <Link to='/' className='header-logo'>
            <span className='header-logo__break'>A</span>desh
          </Link>
          <div className='header-theme'>
            <span className='header-theme__options header-theme__option--active'>
              light
            </span>
            <span className='header-theme__options'>Dark</span>
          </div>
          <div
            className={`hamburger ${this.state.menuactive ? `active` : ` `}`}
            onClick={() => this.toggleHandle()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul
          className={`menu-list ${
            this.state.menuactive ? `menu-active` : `menu-hide`
          }`}
        >
          <li className='menu-list__item'>
            <Link className='menu-list__item__links' to='/'>
              About Me
            </Link>
          </li>
          <li className='menu-list__item'>
            <Link className='menu-list__item__links' to='/resume'>
              Resume
            </Link>
          </li>
          <li className='menu-list__item'>
            <Link className='menu-list__item__links' to='/portfolio'>
              Portfolio
            </Link>
          </li>
          <li className='menu-list__item menu-list__item--button'>
            <Link className='menu-list__item__links' to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
