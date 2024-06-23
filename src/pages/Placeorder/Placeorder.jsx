import React, { useContext } from 'react'
import './Placeorder.css'
import { Storecontext } from './../../Context/Storecontext';
const Placeorder = () => {

  const {gettotalcartamount} = useContext(Storecontext)

  return (
    <form className='place-order' action="">
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${gettotalcartamount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${gettotalcartamount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotalcartamount() === 0 ? 0 : gettotalcartamount() + 2}</b>
            </div>
          </div>
          <button >PROCEED TO PATMENT</button>
        </div>
      </div>

    </form>
  )
}

export default Placeorder