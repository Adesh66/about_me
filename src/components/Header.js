import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <header className='header'>
        <Link to="/" className='header-logo'>
          <span className='header-logo__break'>A</span>desh
        </Link>
        <div className='header-theme'>
          <span className='header-theme__options header-theme__option--active'>
            light
          </span>
          <span className='header-theme__options'>Dark</span>
        </div>
        <ul className='menu-list'>
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
          {/* <li className='menu-list__item'>
              <Link className='menu-list__item__links' to='/blog'>
                Blog
              </Link>
            </li> */}
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
