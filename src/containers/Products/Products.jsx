import React from 'react';
import './Products.scss';
import {Navbar} from '../../components';
import {Photography, Videography} from '../../components';
import {bg6} from '../../utils/images';

const Products = () => {
  return (
    <div className='products'>
      <div className="products__overlay">
        <Navbar/>
        
        <Photography/>

        <div className="product__border"/>

        <Videography/>
      </div>
    </div>
  )
}

export default Products