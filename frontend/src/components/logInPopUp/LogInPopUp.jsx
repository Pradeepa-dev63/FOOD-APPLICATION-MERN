import React, { useContext, useEffect, useState } from 'react'
import './LogInPopUp.css'
import { assets } from '../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'


const LogInPopUp = ({setShowLogin}) => {

   const {url, setToken} = useContext(StoreContext)

   //const url = "http://localhost:8000" ;

    const [currState,setCurrState] = useState('Login')
    const [data,setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) =>{
      const name = event.target.name
      const value = event.target.value;
      setData(data=>({...data,[name]:value }))
    }
  //-------------------------------------------//

  const onLogin = async(event)=>{
    event.preventDefault()
    let newUrl = url
    if(currState === "Login"){
          newUrl += '/api/user/login'
        } else {
          newUrl += "/api/user/register"
        }
     const response = await axios.post(newUrl, data)
      if(response.data.success){
           setToken(response.data.token);
            localStorage.setItem('token' , response.data.token)
            setShowLogin(false)
        } else{
          alert(response.data.message )
        }
    }


useEffect(()=>{
console.log(data)
} , [data])

  return (
    <div className='login-popup'>
      <div className='main'>
        <div className='sub-main'>
      <form onSubmit={(e)=>onLogin(e)} className='login-popup-container'> 
        <div className='log-in-title'> 
            <h2>{currState}</h2>
            <img onClick= {()=>setShowLogin(false)} img src={assets.cross_icon} alt='img' />
        </div>
        <div className='login-popup-inputs'>
          {currState === 'Login' ? <></>: 
            <input type='text' name='name' onChange={onChangeHandler} value={data.name} placeholder='Enter your Name'  required/> }
            <input type='email' name='email'  onChange={onChangeHandler} value={data.email} placeholder='Enter your Email' required/>
           <input name= "password" type='password'  onChange={onChangeHandler} value={data.password} placeholder='Enter your password' required  />
           </div>
      
        <button type= 'submit'> {currState === 'Sign up'? 'Create Account' : 'Login'} </button>

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
