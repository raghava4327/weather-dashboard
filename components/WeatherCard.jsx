import React from "react"
import {Theme} from "./WeatherReports"
import CountryList from "./CountryList"
export default function WeatherCard(){
  const weatherVal=React.useContext(Theme)
  // const [time,setTime]=React.useState(new Date(weatherVal.dt*1000+(weatherVal.timezone*1000)))
  // React.useEffect(()=>{
  //  const timer= setTimeout(()=>{
  //     setTime(new Date().getTime())
  //       },1000)
  //   return ()=> clearTimeout(timer)
  // },[time])
  function toUTCStringWithoutSeconds(date) {
    let utcString = date
    let stringWithoutSeconds = utcString.replace(/:\d{2} GMT/, ' GMT');
  return stringWithoutSeconds;
  }
  return(
    <div className="weather-card">
          <h1 className="today-temp">{Math.floor(weatherVal.main.temp)}°C</h1>
           <img className="weather-img" src={`https://openweathermap.org/img/wn/${weatherVal.weather[0].icon}@2x.png`}/>
          <p className="location">{weatherVal.name}<br/><span><CountryList con={weatherVal.sys.country}/></span></p>
          <p className="time">{toUTCStringWithoutSeconds(new Date(weatherVal.dt*1000+(weatherVal.timezone*1000)).toUTCString())} <br /></p>
          {/* {console.log(weatherVal.timeZone)}
          <p className="time">{new Date(time).toLocaleString("en-GB",{timeZone:weatherVal.timezone})} <br /></p> */}
      </div>
  )
}