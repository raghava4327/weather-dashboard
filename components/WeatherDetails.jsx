import React from "react"
import WeatherDetailsCards from "./WeatherDetailsCards"
import sunrise from "../src/assets/32/Color=On-2.svg"
import sunset from "../src/assets/32/Color=On-3.svg"
import humidity from "../src/assets/32/Color=On-7.svg"
import pressure from "../src/assets/32/Color=On-6.svg"
import {Theme} from "./WeatherReports"
export default function WeatherDetails(){
  const weatherVal=React.useContext(Theme)
  function getTime(time){
    let date=new Date(time*1000+(weatherVal.timezone*1000))
    return `${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`
  }
  return(
    <div className="weather-details">
      <WeatherDetailsCards image={sunrise} details={getTime(weatherVal.sys.sunrise)}>Sunrise</WeatherDetailsCards>
      <WeatherDetailsCards image={sunset} details={getTime(weatherVal.sys.sunset)}>Sunset</WeatherDetailsCards>
      <WeatherDetailsCards image={humidity} details={`${weatherVal.main.humidity}%`}>Humidity</WeatherDetailsCards>
      <WeatherDetailsCards image={pressure} details={`${weatherVal.main.pressure} hPa`}>Pressure</WeatherDetailsCards>
      </div>
  )
}