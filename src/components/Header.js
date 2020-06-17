import React from 'react';
import '../styles/header.scss';
function Header() {
  return (
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
          <a className='menu-list__item__links' href='About'>
            About Me
          </a>
        </li>
        <li className='menu-list__item'>
          <a className='menu-list__item__links' href='service'>
            Resume
          </a>
        </li>
        <li className='menu-list__item'>
          <a className='menu-list__item__links' href='contact'>
            Portfolio
          </a>
        </li>
        <li className='menu-list__item'>
          <a className='menu-list__item__links' href='blog'>Blog</a>
        </li>
        <li className='menu-list__item menu-list__item--button'>
          <a className='menu-list__item__links' href='contact'>Contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
