import React from 'react';
import '../styles/notfound.scss';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
import * as animationData from '../assets/JSON/notfound.json';
function Notfound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className='notfound'>
      <div className='notfound-details'>
        <div className='notfound-details__title'>404</div>
        <div className='notfound-details__descp'>
          Page Does not exist. You probably entered the wrong URL or something.
        </div>
        {/* <Link className='notfound-details__goback'>Go Home</Link> */}
      </div>
      <div className='notfound__icon'>
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    </div>
  );
}

export default Notfound;
