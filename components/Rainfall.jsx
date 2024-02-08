import React from "react"
import {Theme} from "./WeatherReports"
import rain from "../src/assets/32/Color=On-8.svg"
import snow from "../src/assets/32/Color=On-22.svg"
import wind from "../src/assets/32/Color=On-23.svg"

export default function Rainfall(){
  const weatherVal=React.useContext(Theme)
  return(
    
    <div className="some-weather-conditions">
      <div className="each-card-rainfall">
    <img src= {rain}/>
      <div>
    <h2>Rainfall</h2>
    {weatherVal.rain?<p>Rain(for 1h) : {weatherVal.rain["1h"]} mm</p>:<p>no rain today</p>}
    </div>
    </div>
    <div className="each-card-rainfall">
    <img src= {snow}/>
      <div >
    <h2>Snow</h2>
    {weatherVal.snow?<p>Snow(for 1h) : {weatherVal.snow["1h"]} mm  </p>:<p>no snow today</p>}
    </div>
    </div>
    <div className="each-card-rainfall">
    <img src={wind} />
      <div>
    <h2>Wind</h2>
    <p>wind speed : {weatherVal.wind.speed} meter/sec</p>
    <p>wind direction : {weatherVal.wind.deg}°</p>
    <p>wind gust : {weatherVal.wind.gust} meter/sec</p>
    </div>
    </div>
    </div>
  )
}