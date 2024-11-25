import React from 'react'
import Navbar from './components/navbar/Navbar'
import SideBar from './components/sidebar/SideBar'
import AddItem from './pages/add_item/AddItem'
import List from './pages/all_list/List'
import Order from './pages/Order/Order'
import {Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Navbar/>
    <hr/>
    <div children='app-content'>
      <SideBar/>
      <Routes>
        <Route path= '/add' element = {< AddItem/>} />
        <Route path= '/list' element = {< List/>} />
        <Route path= '/order' element = {< Order/>} />
      </Routes>
 
    </div>
    </div>
  )
}

export default App