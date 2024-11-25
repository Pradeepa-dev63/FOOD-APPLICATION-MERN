import React from 'react'
import { assets } from '../assets/assets'
import './Footer.css'

const Bottam = () => {
  return (
    <div>
       <div className='footer' id= 'footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt='img' />
                <p>Choose from a diverse menu featuring a delectable array of dishes 
            crafted with the finest ingredients and culinary experties.
            sacitsfy your cravings and elevate your dining experience, one delicious meal a a time.
            </p> 

            <div className='media-icon'>
            <a href="https://www.facebook.com/profile.php?id=100094671681700"> <img src={assets.fb} alt='' /> </a>
            <a href=" https://wa.me/9072246280"> <img src={assets.whatsapp} alt='' />  </a>
            <a href="https://www.instagram.com/s_i_n_d_h_u_ja/"> <img src={assets.insta} alt='' /></a>
            <a href="https://github.com/Coding-0"> <img src={assets.git} /> </a>
            <a href='https://Pradeepathangadurai3456@gmail.com'> <img src={assets.gmail} alt='' /> </a>
            </div>
            </div>
            <div className='footer-content-center'>
              <h2>COMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy </li>
              </ul>
            </div>
            <div className='footer-content-right'>
              <h2>GET IN TOUCH</h2>
              <ul>
                <li>+910000000000</li>
                <li>Pradeepathangadurai3456@gmail.com</li>
              </ul>
             </div>
             </div>
          <hr/>
          
         
          </div>
          <center>
          <div className='footer-copyright'>Copyright&copy;2024;Designed by<span>~PRADEEPA.</span></div>
          </center>
    </div>
  )
}

export default Bottam
