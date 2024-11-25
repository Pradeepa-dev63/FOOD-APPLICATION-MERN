import React, { useState } from 'react'
import './LogInPopUp.css'
import { assets } from '../assets/assets'

const LogInPopUp = ({setShowLogin}) => {
    const [currState,setCurrState] = useState('Sign in')
  return (
    <div className='login-popup'>
      <div className='main'>
        <div className='sub-main'>
      <form className='login-popup-container'> 
        <div className='log-in-title'> 
            <h2>{currState}</h2>
            <img onClick= {()=>setShowLogin(false)} img src={assets.cross_icon} alt='img' />
        </div>
        <div className='login-popup-inputs'>
          {currState === 'Login' ? <></>: 
            <input type='text' name='name' placeholder='Enter your Name'  required/> }
            <input type='email' name='email' placeholder='Enter your Email' required/>
            <input type='password' name='paddword' placeholder='Password' required />
        </div>
        <button> {currState === 'Sign up'? 'Create Account' : 'Login'} </button>

        <div className='login-popup-condition'>
          <input type='Checkbox' required />
          <p> By continuing,i agree to the terms of use & Privacy Policy. </p>
        </div>

        {currState === 'Login' ? 
          <p> Create a new account ? <span onClick={()=>setCurrState('Sign up')}>
            Click here</span></p> :      
          <p> Already have an account ? <span onClick={()=>setCurrState('Login')}>
            Login here</span> </p> 
        }
        
       </form>
       </div>
      </div>
     
    </div>
      
  )
}

export default LogInPopUp
