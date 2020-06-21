import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
      <Link to='/' className='footer__title'>
        A
      </Link>
      <ul className='social'>
        <li className='social__item'>
          <a
            href='https://github.com/Adesh66'
            className='social__link social__link--github'
          >
            <i className='fa fa-github'></i>
          </a>
        </li>
        <li className='social__item'>
          <a
            href='https://www.linkedin.com/in/adesh-gangwar-5254a6106/'
            className='social__link social__link--linkedin'
          >
            <i className='fa fa-linkedin'></i>
          </a>
        </li>
        <li className='social__item'>
          <a
            href='https://www.facebook.com/adesh.gangwar66'
            className='social__link social__link--facebook'
          >
            <i className='fa fa-facebook'></i>
          </a>
        </li>
        <li className='social__item'>
          <a
            href='https://twitter.com/adeshgangwar'
            className='social__link social__link--twitter'
          >
            <i className='fa fa-twitter'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
