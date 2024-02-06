import React from "react"
import WeatherDetailsCards from "./WeatherDetailsCards"
import sunrise from "../src/assets/32/Color=On-2.svg"
import sunset from "../src/assets/32/Color=On-3.svg"
import humidity from "../src/assets/32/Color=On-7.svg"
import pressure from "../src/assets/32/Color=On-6.svg"
import {Theme} from "./WeatherReports"
export default function WeatherDetails(){
  const weatherVal=React.useContext(Theme)
  return(
    <div className="weather-details">
      <WeatherDetailsCards image={sunrise} details={new Date(weatherVal.sys.sunrise*1000+(weatherVal.timezone*1000)).toUTCString()}>Sunrise</WeatherDetailsCards>
      <WeatherDetailsCards image={sunset} details={new Date(weatherVal.sys.sunset*1000+(weatherVal.timezone*1000)).toUTCString()}>Sunset</WeatherDetailsCards>
      
      <WeatherDetailsCards image={humidity} details={`${weatherVal.main.humidity}%`}>Humidity</WeatherDetailsCards>
      <WeatherDetailsCards image={pressure} details={`${weatherVal.main.pressure} hPa`}>Pressure</WeatherDetailsCards>
      </div>
  )
}