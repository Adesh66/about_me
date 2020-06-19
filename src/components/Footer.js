import React from 'react';
import '../styles/footer.css';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__title'>A</div>
      <ul className='social'>
        <li className='social__item'>
          <a href='g' className='social__link social__link--github'>
            <i className='fa fa-github'></i>
          </a>
        </li>
        <li className='social__item'>
          <a href='g' className='social__link social__link--linkedin'>
            <i className='fa fa-linkedin'></i>
          </a>
        </li>
        <li className='social__item'>
          <a href='g' className='social__link social__link--facebook'>
            <i className='fa fa-facebook'></i>
          </a>
        </li>
        <li className='social__item'>
          <a href='g' className='social__link social__link--twitter'>
            <i className='fa fa-twitter'></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
