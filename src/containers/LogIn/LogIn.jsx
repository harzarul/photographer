import React from 'react';
import './LogIn.scss';
import { Navbar } from '../../components';

const LogIn = () => {
  return (
    <div className='login'>
      <div className="login__overlay">
        <Navbar/>

        <div className="login__container">
          <div className="login__container-headtext">
            <h1>Log In</h1>
          </div>

          <div className="login__container-table">
            <div className="table__input">
              <input type="text" placeholder='username' />
              <input type="text" placeholder='password' />
            </div>

            <div className="table__button">
              <button>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn