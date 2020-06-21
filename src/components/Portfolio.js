import React from 'react';
import project from '../assets/projects/1.jpg';

function Portfolio() {
  return (
    <div className='portfolio'>
      <div className='portfolio__title'>Portfolio</div>
      <div className='project'>
        <div className='project__list'>
          <div className='project__fig'>
            <img src={project} alt='project_theme' className='project__list__image' />
          </div>
          <div className='project__title'>iChamp India</div>
          <a href='google' target='_blank' className='project__url'>
            <i className='fa fa-globe'></i>
          </a>
        </div>
        <div className='project__list'>
          <div className='project__fig'>
            <img src={project} alt='project_theme' className='project__list__image' />
          </div>
          <div className='project__title'>Livecareer</div>
          <a href='goo' target='_blank' className='project__url'>
            <i className='fa fa-globe'></i>
          </a>
        </div>
        <div className='project__list'>
          <div className='project__fig'>
            <img src={project} alt='project_theme' className='project__list__image' />
          </div>
          <div className='project__title'>Livecareer</div>
          <a href='goo' target='_blank' className='project__url'>
            <i className='fa fa-globe'></i>
          </a>
        </div>
        <div className='project__list'>
          <div className='project__fig'>
            <img src={project} alt='project_theme' className='project__list__image' />
          </div>
          <div className='project__title'>Livecareer</div>
          <a href='goo' target='_blank' className='project__url'>

            <i className='fa fa-globe'></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
