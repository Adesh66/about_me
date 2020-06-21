import React from 'react';
import '../styles/banner.scss';
import logo from '../assets/admin.jpg';
import MyPDF from '../assets/cv.pdf';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div className='banner'>
      <div className='banner__fig'>
        <img src={logo} alt='my_profile_picture' />
      </div>
      <div className='caption-box'>
        <div className='caption-box__designation'>UI Engineer</div>
        <div className='caption-box__title'>
          <span className='caption-box__title__bold'>Adesh</span> Kumar
        </div>
        <div className='caption-box__description'>
          I'm a UI Engineer with 3 years of experience in UI development and
          currently working with BOLD INDIA. I'm quite familar with developing
          the core products and handling the larger applications. When I am not
          busy solving a technology problem, I love cooking and catching a
          movie.
        </div>
        <div className='action-btn'>
          <Link
            to={MyPDF}
            target='_blank'
            className='action-btn__home action-btn__home__download'
            download
          >
            Download CV
          </Link>
          <Link to="/contact" className='action-btn__home action-btn__home__contact'>
            Contact
          </Link>
        </div>
      </div>
      <div className='text-bg'>
        <span>Adesh</span>
      </div>
    </div>
  );
}

export default Intro;
