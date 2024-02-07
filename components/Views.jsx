import React from "react"
import { weatherAdvice } from "./data"
import {Theme} from "./WeatherReports"
export default function Views(){
  const weatherVal=React.useContext(Theme)
  return(
    <div className="views">
        
          <h2 className="view-heading">Today tips for viewer's</h2>
          <details className="view-subheads">
            <summary>Event planners</summary>
            <p className="subheads-answers">{weatherAdvice[weatherVal.weather[0].description]["event planners"]}</p>
            </details>
          <details className="view-subheads">
            <summary>Agricultural insights</summary>
            <p className="subheads-answers">{weatherAdvice[weatherVal.weather[0].description]["agricultural insights"]}</p>
            </details>
          <details className="view-subheads">
            <summary>Travel weather planner</summary>
            <p className="subheads-answers">{weatherAdvice[weatherVal.weather[0].description]["travel planners"]}</p>
            </details>
          
          
      </div>
  )
}