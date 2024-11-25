import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import {Routes, Route} from 'react-router-dom'
import Card from './components/pages/card/Card'
import Home from './components/pages/Home/Home';
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder';
import Bottam from './components/footer/Footer';
import LogInPopUp from './components/logInPopUp/LogInPopUp';


const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LogInPopUp setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route  path='/' element = {<Home/>} />
        <Route  path='/Card' element = {<Card/>} />
        <Route  path='/PlaceOrder' element = {<PlaceOrder/>} />
      </Routes>
      </div>
      
      <Bottam/>
    </>
  )
}

export default App;
