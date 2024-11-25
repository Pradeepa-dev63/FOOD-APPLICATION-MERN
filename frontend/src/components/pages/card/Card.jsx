import React, { useContext, useState } from 'react'
import './Card.css'
import {StoreContext} from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Card = () => {

  const {cardItems,food_list,removeFromCard , getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <div className='card'>
       <div className='card-items'>
        <div className='card-items-title'>
          <p>Item</p>
          <p> Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>

        {food_list.map((item, index)=>{
         if(cardItems[item._id] >0){
          return (
          <div>
            <div className='card-items-title card-items-items '>
           <img src={item.image} alt='img' />
           <p >{item.name}</p>
           <p> $ {item.price}</p>
           <p>{cardItems[item._id]}</p>
           <p> $ {item.price*cardItems[item._id]}</p>
           <p onClick={()=>{removeFromCard(item._id)}} className='cross'>x</p>
          </div>
          <hr/>
         </div>
          
        ) }
        })}
      </div>

      <div className='card-bottom'>

        <div className='card-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className='card-total-details'>
              <p>SubTotal</p> <p>$ {getTotalCartAmount()}</p>
            </div><hr/>
            <div className='card-total-details'>
              <p>Delevery Charge</p> <p>$ { getTotalCartAmount()=== 0 ? 0 : 10}</p>
            </div> <hr/> 
            <div className='card-total-details'>
              <b>Total</b><b> $ {getTotalCartAmount()=== 0 ? 0 : getTotalCartAmount()+ 10}</b>
            </div>
           </div>
          <button onClick={()=>navigate('/PlaceOrder')}>PROCEED TO CHECKOUT</button>
        </div>
        
        <div className='card-promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='card-promocode-input'> 
              <input type='text' placeholder='Promo code' />
              <button> Submit</button>
            </div>
          </div>
        </div>
      </div>

   
   
   
   
   
    </div>
  )
}

export default Card
