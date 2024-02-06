import React from "react"
import {Theme} from "./WeatherReports"
import hot from "../src/assets/cold.gif"
export default function Temperature(){
  const weatherVal=React.useContext(Theme)
  return(
    <div className="temperature">
      <img src="../src/assets/hot.gif" alt="warm gif" />
    
    <div>
    <h3>Today's max Temperature</h3>
    <p>{weatherVal.main.temp_max}°C</p>
    </div>
    <img src={hot} alt="cold gif" />
    <div>
    <h3>Today's min Temperature</h3>
    <p>{weatherVal.main.temp_min}°C</p>
    </div>
    </div>
  )
}