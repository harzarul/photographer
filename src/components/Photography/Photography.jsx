import React, {useState, useEffect} from 'react';
import './Photography.scss';
import {VscChevronLeft, VscChevronRight} from 'react-icons/vsc';
import {GiPointyHat} from 'react-icons/gi';
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi';
import {photography} from '../../utils/data';


const Photography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = photography.length;

  const prevData = () =>{
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1)
  }
  const nextData = () =>{
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1)
  }
  
  return (
    <div className="photography">
      <div className="photography__header">
        <h1>Photography</h1>
      </div>
      
      <div className="photography__content">
        <div className="photography__content-text">
          <p><GiPointyHat/> Mind Blowing Scene</p>
          <p><GiPointyHat/> Professional Communication Skills</p>
          <p><GiPointyHat/> 10 Years Of Experience and Running Strong</p>
        </div>

        {photography.map((data,index) => {
        return (
          <div className={`photography__content-image ${index === currentIndex ? 'show' : null}`} key={data.name}>
            <VscChevronLeft className='bigarrow' onClick={prevData}/>
            <img src={data.img} alt="" />
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

export default Photography