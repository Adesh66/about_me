import React, { Component } from 'react';
import '../styles/header.scss';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <Router>
        <header className='header'>
          <div className='header-logo'>
            <span className='header-logo__break'>A</span>desh
          </div>
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
              <Link className='menu-list__item__links' to='/service'>
                Resume
              </Link>
            </li>
            <li className='menu-list__item'>
              <Link className='menu-list__item__links' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li className='menu-list__item'>
              <Link className='menu-list__item__links' to='/blog'>
                Blog
              </Link>
            </li>
            <li className='menu-list__item menu-list__item--button'>
              <Link className='menu-list__item__links' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </header>
      </Router>
    );
  }
}

export default Header;
