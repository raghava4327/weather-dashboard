import React from 'react'
import Navbar from "../components/Navbar"
import WeatherReports from "../components/WeatherReports"
import './App.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = (message) => toast.error(message);
  const [location,setLocation]=React.useState({})
  const[place,setPlace] = React.useState("")
  function Location(ans){
    setPlace(ans)
  }
  function clear(){
    setPlace("")
  }
  React.useEffect(()=>{
    if(place)
    {
      fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=ce71b9d8c5255de8b809b827c004c3f6`)
      .then(res=> res.json())
      .then(data=>{
        setLocation({lat:data[0].lat,lon:data[0].lon})
      
    })
    .catch(()=>{
      notify("no location found")
    })
    
  }
    else{
      navigator.geolocation.getCurrentPosition((position)=>{
        setLocation({lat:position.coords.latitude,lon:position.coords.longitude})
        
      },(err)=>{
        notify(err.message +"\nplease enable it")
      })
    }
   },[place])
  return (
  Object.keys(location).length?
    <>
    <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false}
        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
    <Navbar Location={Location} clear={clear}/>
    <WeatherReports lat ={location.lat} lon={location.lon}/>
    </>:<ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false}
        closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"/>
  )
}

export default App
