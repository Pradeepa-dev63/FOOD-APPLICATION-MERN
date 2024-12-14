import React from 'react'
import Navbar from './components/navbar/Navbar'
import SideBar from './components/sidebar/SideBar'
import AddItem from './pages/add_item/AddItem'
import List from './pages/all_list/List'
import Order from './pages/Order/Order'
import {Routes , Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    
  const url = 'http://localhost:8000'

  return (
    <div>
    <ToastContainer/>
    <Navbar/>
    <hr/>
    <div children='app-content'>
      <SideBar/>
      <Routes>
        <Route path= '/add' element = {< AddItem url={url} />} />
        <Route path= '/list' element = {< List url={url} />} />
        <Route path= '/order' element = {< Order url={url} />} />
      </Routes>
 
    </div>
    </div>
  )
}

export default App