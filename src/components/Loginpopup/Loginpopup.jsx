import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from './../../assets/assets';
const Loginpopup = ({setshowlogin}) => {
    const [currstate, setcurrstate] = useState("Login")
  return (
    <div className='login-popup' >
      <form className='login-popup-container' >
        <div className="login-popup-title">
            <h2>{currstate}</h2>
            <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className="login-popup-inputs">
            
            {currstate==='Login'?<></>:<input placeholder='Your name' required type="text" /> }
            <input placeholder='Your email' required type="email" />
            <input placeholder='Password' required type="password" />
        </div>
        <button>{currstate==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type='checkbox' required />
            <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currstate==="Login"
        ?<p>Create a new account? <span onClick={()=>setcurrstate("Sign Up")} >Click here</span> </p>
        :<p>Already have an account? <span onClick={()=>setcurrstate("Login")} >Login here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default Loginpopup
