import React from "react"
import {Theme} from "./WeatherReports"
import CountryList from "./CountryList"
export default function WeatherCard(){
  const weatherVal=React.useContext(Theme)
  return(
    <div className="weather-card">
      {console.log(weatherVal)}
          <h1 className="today-temp">{Math.floor(weatherVal.main.temp)}°C</h1>
           <img className="weather-img" src={`https://openweathermap.org/img/wn/${weatherVal.weather[0].icon}@2x.png`}/>
          <p className="location">{weatherVal.name}<br/><span><CountryList con={weatherVal.sys.country}/></span></p>
          <p className="time">{new Date(weatherVal.dt*1000+(weatherVal.timezone*1000)).toUTCString()} <br /></p>
      </div>
  )
}