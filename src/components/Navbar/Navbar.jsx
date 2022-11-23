import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.scss';
import {Logo} from '../../utils/images';
import {CgMoreO, CgCloseR} from 'react-icons/cg';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="navbar__links">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/product'>Products</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
      </div>

      <div className="navbar__login">
        <NavLink to='/login'>Log In</NavLink>
        <span> | </span>
        <NavLink to='/signup'>Sign Up</NavLink>
      </div>

      <div className="navbar__smallscreen">
        <CgMoreO className={`navbar__smallscreen-more ${toggle ? 'toggle__hide' : ''}`} onClick={() => setToggle(true)}/>

        {toggle ?
        (<div className="navbar__smallscreen-links">
          <div className="navbar__smallscreen-links_link">
            <NavLink to='/' onClick={() => setToggle(false)}>Home</NavLink>
            <NavLink to='/product' onClick={() => setToggle(false)}>Products</NavLink>
            <NavLink to='/aboutus' onClick={() => setToggle(false)}>About Us</NavLink>
          </div>

          <div className="navbar__smallscreen-links_close">
            <CgCloseR onClick={() => setToggle(false)}/>
          </div>
        </div>) : ''}

      </div>
    </div>
  )
}

export default Navbar