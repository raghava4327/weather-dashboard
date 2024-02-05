import React from "react"
export default function Navbar(){
  return(
    <div className="navbar">
    <h1>Weather Dashboard</h1>
    <input type="text" placeholder="Enter location or pincode"/>
    <div className="navbar-icons">
    <img src="../src/assets/Bell.svg" />
    </div>
    </div>
  )
}