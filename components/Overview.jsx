import React from "react"
import {Theme} from "./WeatherReports"
import { weatherAdvice } from "./data"
export default function Overview(){
  const weatherVal=React.useContext(Theme)
  return(
    <div className="overview">
      <h1 className="overview-head">Weather Overview</h1>
      <div className="overview-content">
      <h2>Feels like {weatherVal.main.feels_like}°C and {weatherVal.weather[0].description}</h2>
      <p>{weatherAdvice[weatherVal.weather[0].main]["for all people"]}</p>
      </div>
      </div>
  )
}