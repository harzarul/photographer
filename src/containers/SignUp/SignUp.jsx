import React from 'react';
import './SignUp.scss';
import { Navbar } from '../../components';

const SignUp = () => {
  return (
    <div className='signup'>
      <div className="signup__overlay">
        <Navbar/>

        <div className="signup__container">
          <div className="signup__headtext">
            <h1>Sign Up</h1>
          </div>

          <div className="signup__inputs">
            <div className="signup__input-names">
              <input type="text" placeholder='Firstname' />
              <input type="text" placeholder='Lastname' />
            </div>
            
            <div className="signup__input-email">
              <input type="text" placeholder='Email' />
              <input type="text" placeholder='Password' />
            </div>
          </div>

          <div className="signup__button">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp