import React from "react"
import {Theme} from "./WeatherReports"
export default function Rainfall(){
  const weatherVal=React.useContext(Theme)
  return(
    
    <div className="some-weather-conditions">
    <img src="../src/assets/32/Color=On-8.svg" />
      <div>
    <h2>Rainfall</h2>
    {weatherVal.rain?weatherVal.rain:<p>no rain today</p>}
    </div>
    <img src="../src/assets/32/Color=On-22.svg" />
      <div>
    <h2>Snow</h2>
    {weatherVal.rain?weatherVal.rain:<p>no snow today</p>}
    </div>
    <img src="../src/assets/32/Color=On-23.svg" />
      <div>
    <h2>Wind</h2>
    <p>wind speed : {weatherVal.wind.speed} meter/sec</p>
    <p>wind direction : {weatherVal.wind.deg}°</p>
    <p>wind gust : {weatherVal.wind.gust} meter/sec</p>
    </div>
    </div>
  )
}