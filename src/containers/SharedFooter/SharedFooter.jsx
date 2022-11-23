import React from 'react';
import './SharedFooter.scss';
import { Outlet } from 'react-router-dom';
import {Navbar, Footer} from '../../components';

const SharedFooter = () => {
  return (
    <>
    <Outlet/>
    
    <Footer/>
    </>
  )
}

export default SharedFooter