import React, {useState, useEffect} from 'react';
import './Videography.scss';
import {VscChevronLeft, VscChevronRight} from 'react-icons/vsc';
import {GiPointyHat} from 'react-icons/gi';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';
import {videography} from '../../utils/data';

const Videography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = videography.length;

  const prevData = () =>{
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }
  const nextData = () =>{
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }
  
  return (
    <div className="videography">
      <div className="videography__header">
        <h1>Videography</h1>
      </div>
      
      <div className="videography__content">
        <div className="videography__content-text">
          <p><GiPointyHat/> Mind Blowing Scene</p>
          <p><GiPointyHat/> Professional Communication Skills</p>
          <p><GiPointyHat/> 10 Years Of Experience and Running Strong</p>
        </div>

        {videography.map((data,index) => {
        return (
          <div className={`videography__content-image ${index === currentIndex ? 'show' : null}`} key={data.name}>
            <VscChevronLeft className='bigarrow' onClick={prevData}/>
            <video src={data.url} autoPlay muted loop/>
            <VscChevronRight className='bigarrow' onClick={nextData}/>

            <div className="smallarrow">
              <BiLeftArrow className='smallarrow__left'onClick={prevData}/>
              <BiRightArrow className='smallarrow__right' onClick={nextData}/>
            </div>
          </div> 
        )
      })}
      </div>
    </div>
  )
}

export default Videography