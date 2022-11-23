import React from 'react';
import './Home.scss';
import {Navbar, HomeCard, HomeCard2} from '../../components';
import {RiSingleQuotesL, RiSingleQuotesR} from 'react-icons/ri';

const Home = () => {
  return (
    <>
    <div className="home">
      <div className="home__overlay">
        <Navbar/>

        <div className="home__cta">
          <h1>
            <span><RiSingleQuotesL/></span>
            every shot worth a million word
            <span><RiSingleQuotesR/></span>
          </h1>
          <button>Book Now</button>
        </div>

        <div className="home__headline">
          <p>Free E-Album</p>
          <p>Early Birds Discount</p>
          <p className='exp'>10 Years Experience</p>
        </div>

        <div className="home__packages">
          <div className="home__packages-card">
            <HomeCard/>
          </div>
          
          <div className="home__packages-card">
            <HomeCard2/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home