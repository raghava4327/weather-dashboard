import React from "react"
import WeatherDetailsCards from "./WeatherDetailsCards"
import {Theme} from "./WeatherReports"
export default function WeatherDetails(){
  const weatherVal=React.useContext(Theme)
  return(
    <div className="weather-details">
      <WeatherDetailsCards image="../src/assets/32/Color=On-2.svg" details={new Date(weatherVal.sys.sunrise*1000+(weatherVal.timezone*1000)).toUTCString()}>Sunrise</WeatherDetailsCards>
      <WeatherDetailsCards image="../src/assets/32/Color=On-3.svg" details={new Date(weatherVal.sys.sunset*1000+(weatherVal.timezone*1000)).toUTCString()}>Sunset</WeatherDetailsCards>
      
      <WeatherDetailsCards image="../src/assets/32/Color=On-7.svg" details={`${weatherVal.main.humidity}%`}>Humidity</WeatherDetailsCards>
      <WeatherDetailsCards image="../src/assets/32/Color=On-6.svg" details={`${weatherVal.main.pressure} hPa`}>Pressure</WeatherDetailsCards>
      </div>
  )
}