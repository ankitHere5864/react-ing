import React from 'react'
import { Link } from "react-router-dom"
// import './App.css'

function Navbar() {
  return (
    <div className='nav-bar'>
        
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwJn38G2xg2J_sgO81URPH5B_RyI3rwDZtQ&usqp=CAU" 
        className="img1" 
        alt="Logo"
      />
        <h2>welcome to Do-Not-Dope</h2>
        <h3><Link to="/">HOME</Link></h3>
        <h3><Link to="/register">Register</Link></h3>
        <h3><Link to="/login">Login</Link></h3>
        {/* <h3><Link to="/about">ABOUT</Link></h3> */}
        {/* <h3><Link to="/dicegame">Dice-Game</Link></h3> */}
        {/* <h3>LOGIN/SIGNUP</h3> */}
      

      {/* This is where nested routes will be rendered if any */}
      
    </div>
  )
}

export default Navbar;
