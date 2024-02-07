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
  console.log(data)
  React.useEffect(()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ce71b9d8c5255de8b809b827c004c3f6&units=metric`)
    .then(res=>res.json())
    .then(data=>setData(data))
    },[lat,lon])
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