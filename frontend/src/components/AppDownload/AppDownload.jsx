import React from 'react'
import { assets } from '../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download</p>
      <p className='dnld-btn'> <span>//</span> *Kitchen App..!* <span>//</span>  </p>
      <div className='app-download-platform'>
       <img src={assets.play_store}  alt='img'/>
       <img src={assets.app_store}  alt='img'/>
      </div>
    </div>
  )
}

export default AppDownload
