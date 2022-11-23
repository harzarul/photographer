import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Products, AboutUs, SharedFooter, LogIn, SignUp} from './containers';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SharedFooter/>}>
                <Route index element={<Home/>}/>

                <Route path='product' element={<Products/>}/>

                <Route path='aboutus' element={<AboutUs/>}/>

                <Route path='login' element={<LogIn/>}/>
                
                <Route path='signup' element={<SignUp/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App