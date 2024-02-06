import React from "react"
import bell from "../src/assets/Bell.svg"
export default function Navbar(){
  return(
    <div className="navbar">
    <h1>Weather Dashboard</h1>
    <div className="navbar-icons">
    <img src={bell} alt="notifications"/>
    </div>
    </div>
  )
}