import React from "react"
import WeatherCard from "./WeatherCard"
import Views from "./Views"
import WeatherDetails from "./WeatherDetails"
import Overview from "./Overview"
import Temperature from "./Temperature"
import Rainfall from "./Rainfall"
import Footer from "./Footer"
export const Theme =React.createContext()
export default function WeatherReports({lat,lon}){
  const [data,setData]=React.useState("")
  React.useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=77d2252ce63a8064c0332b71b7174026&units=metric`)
    .then(res=>res.json())
    .then(data=>setData(data))
    },[])
  
  return(
      data?
    <Theme.Provider value={data}>
      <div className="weather-grid">
      <WeatherCard/>
      <Views />
      <WeatherDetails />
      <Overview />
     <Rainfall />
     <Temperature />
    <Footer />
    </div>
  </Theme.Provider>:
  <p>Loading</p>
  
  )}