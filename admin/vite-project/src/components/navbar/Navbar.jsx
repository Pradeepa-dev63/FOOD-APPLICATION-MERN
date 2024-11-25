import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
       <img src={assets.logo}
        style={{width:'70px' , height:'68px'}} alt='img' />
        <h4>Admin panel</h4>
      <img className='' src={assets.profile_image} 
       style={{width:'60px' , height:'57px', borderRadius:'50%'}} alt="" />
    </div>
  )
}

export default Navbar
