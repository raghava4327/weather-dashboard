import React from 'react'
// import Map from './Map.jsx'
import Navbar from "../components/Navbar"
import WeatherReports from "../components/WeatherReports"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [location,setLocation]=React.useState({})
    React.useEffect(()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        setLocation({lat:position.coords.latitude,lon:position.coords.longitude}  )
      })
    },[])
  return (
  Object.keys(location).length?
    <>
    <Navbar />
    {console.log(location)}
    <WeatherReports lat ={location.lat} lon={location.lon}/>
    </>:<p>Loading</p>

  )
}

export default App
