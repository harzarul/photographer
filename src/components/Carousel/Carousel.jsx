import React, {useState, useEffect} from 'react';
import './Carousel.scss';
import {carousels} from '../../utils/data';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const Length = carousels.length;

    useEffect(() => {
        setCurrentIndex(0)
    },[Length])

    const prevData = () =>{
    setCurrentIndex(currentIndex === Length - 1 ? 0 : currentIndex + 1)
  }
  const nextData = () =>{
    setCurrentIndex(currentIndex === 0 ? Length - 1 : currentIndex - 1)
  }

  return (
    <>
    {carousels.map((data,index) => {
        return (
            <div className={`data ${index === currentIndex ? 'show' : null}`} key={index}>
                <h1>Client Feedback</h1>

                <div className="data__img">
                    <img src={data.img} alt="image" />
                </div>

                <div className="data__info">
                    <div className="data__info-text">
                        <h2>{data.name}</h2>
                        <p>{data.comment}</p>
                    </div>

                    <div className="data__info-arrow">
                        <FaArrowCircleLeft onClick={prevData}/>
                        <FaArrowCircleRight onClick={nextData}/>
                    </div>
                </div>
            </div> 
        )
    })}
    </>
  )
}

export default Carousel