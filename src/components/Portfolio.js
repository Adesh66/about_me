import React from 'react';
import ichamp from '../assets/projects/ichamp.jpg';
import lc from '../assets/projects/lc.jpg';
import cfg from '../assets/projects/cfg.jpg';

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='portfolio__title'>Portfolio</div>
      <div className='project'>
        <div className='project__list'>
          <div className='project__fig'>
            <img src={ichamp} alt='project_theme' className='project__list__image' style={{filter: "brightness(0.35)"}} />
          </div>
          <div className='project__title'>iChamp India</div>
          <a href='https://www.ichamp.in' target='_blank' className='project__url'>
            <i className='fa fa-globe'></i>
          </a>
        </div>
        <div className='project__list'>
          <div className='project__fig'>
            <img src={lc} alt='project_theme' className='project__list__image' style={{filter: "brightness(0.35)"}} />
          </div>
          <div className='project__title'>Livecareer</div>
          <a href='http://www.livecareer.co.uk/' target='_blank' className='project__url'>
            <i className='fa fa-globe'></i>
          </a>
        </div>
        <div className='project__list'>
          <div className='project__fig'>
            <img src={cfg} alt='project_theme' className='project__list__image' style={{filter: "brightness(0.35)"}} />
          </div>
          <div className='project__title'>Carfinancegiant</div>
          <a href='https://carfinancegiant.co.uk' target='_blank' className='project__url'>
            <i className='fa fa-globe'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
