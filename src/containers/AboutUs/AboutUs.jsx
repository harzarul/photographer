import React from 'react';
import './AboutUs.scss';
import {Navbar, Carousel} from '../../components';
import { Photographer1, Partner1, Partner2, Partner3, Partner4 } from '../../utils/images';

const AboutUs = () => {
  return (
    <div className='aboutus'>
      <div className="aboutus__overlay">
        <Navbar/>

        <div className="aboutus__info">
          <div className="aboutus__info-text">
            <h1>Welcome To Kanta !!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi atque ratione labore deserunt, ab libero iusto nam veritatis sed dolores cumque eveniet dicta commodi. Sit, quis!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus eligendi atque ratione labore deserunt, ab libero iusto nam veritatis sed dolores cumque eveniet dicta commodi. Sit, quis!</p>
          </div>
        </div>

        <div className="aboutus__partners">
          <div className="aboutus__partners-headtext">
            <h1>Our Partners</h1>
          </div>

          <div className="aboutus__partners-images">
            <img src={Partner1} alt="partner1" />
            <img src={Partner2} alt="partner2" />
            <img src={Partner3} alt="partner3" />
            <img src={Partner4} alt="partner4" />
          </div>
        </div>

        <div className="aboutus__carousel">
          <Carousel/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs