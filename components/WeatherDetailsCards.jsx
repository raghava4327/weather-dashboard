import React from "react"
export default function WeatherDetailsCards({image,children,details}){
  return(
    <div className="each-weather-detail-card">
    <img  src={image} alt={children} />
    <div>
    <h2>{children}</h2>
    <p>{details}</p>
    </div>
    </div>
  )
}