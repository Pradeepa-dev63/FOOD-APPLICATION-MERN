import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const {getTotalCartAmount} =useContext(StoreContext)
  const navigate = useNavigate();
  return (
    <div>
      <form className='place-order'>
        <div className='place-order-left'>
          <p className='title'>Delivery Information :</p>

          <div className='multi-fields'>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
          </div>

          <input type='text' placeholder='Email address' />
          <input type='text'placeholder='Street' />

          <div className='multi-fields'>
            <input type='text' placeholder='City' />
            <input type='text' placeholder='State' />
          </div>

          <div className='multi-fields'>
            <input type='text' placeholder='Pin Code' />
            <input type='text' placeholder='Country' />
          </div>

          <input type='text' placeholder='Ph No :' />
        </div>

        <div className='place-order-right'>

       
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


        </div>
      </form>
    </div>
  )
}

export default PlaceOrder
