import React from 'react';
import './Footer.scss';
import {Logo} from '../../utils/images';
import {AiOutlineWhatsApp, AiFillInstagram, AiOutlineCopyrightCircle} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content-address">
          <h1>Location</h1>
          <p>241 Petronas Twin Tower,</p>
          <p>Kuala Lumpur City Centre,</p>
          <p> 50088 Kuala Lumpur,</p>
        </div>
        
        <div className="footer__content-logo">
          <img src={Logo} alt="logo" />
        </div>
        
        <div className="footer__content-medsos">
          <AiOutlineWhatsApp/>
          <AiFillInstagram/>
        </div>
      </div>
      
      <div className="footer__copyright">
        <AiOutlineCopyrightCircle/>
        <h1>copyright Kanta | since 1875</h1>
      </div>
    </div>
  )
}

export default Footer