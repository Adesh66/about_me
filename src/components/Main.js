import React from 'react';
import logo from '../assets/admin.jpg';
function Main() {
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
          Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
          <br></br>
          convallis, risus non condimentum gravida, odio mauris ullamcorper
          <br></br>
          felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
          <br></br>
          placerat sapien pretium eu.
        </div>
        <div className='action-btn'>
          <button
            type='button'
            className='action-btn__home action-btn__home__download'
          >
            Download CV
          </button>
          <button type='button' className='action-btn__home action-btn__home__contact'>
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
