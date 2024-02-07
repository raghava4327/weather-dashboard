import React from "react"
import {Theme} from "./WeatherReports"
import { weatherAdvice } from "./data"
export default function Overview(){
  const weatherVal=React.useContext(Theme)
  return(
    <div className="overview">
      <h2 className="overview-head">Weather Overview</h2>
      <div className="overview-content">
      <h1>Feels like {weatherVal.main.feels_like}°C and {weatherVal.weather[0].description}</h1>
      <p>{weatherAdvice[weatherVal.weather[0].main]["for all people"]}</p>
      </div>
      </div>
  )
}