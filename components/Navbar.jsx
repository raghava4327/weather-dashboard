import React from "react"
import bell from "../src/assets/Bell.svg"
export default function Navbar(){
  return(
    <div className="navbar">
    <h1>Weather Dashboard</h1>
    <div className="navbar-icons">
    <input type="text" placeholder="Enter location" id="" />
    <button className="button-30">search</button>
    <button className="button-30">Get current </button>
    </div>
    
    </div>
  )
}