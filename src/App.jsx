import React from 'react'
import Navbar from "../components/Navbar"
import WeatherReports from "../components/WeatherReports"
import Toast from "../components/Toast"
import './App.css'

function App() {
  const [location,setLocation]=React.useState({})
  const[place,setPlace] = React.useState("")
  const [toastMessage, setToastMessage] = React.useState('');

  function Location(ans){
    setPlace(ans)
  }
  function clear(){
    setPlace("")
  }
 console.log(place)
  React.useEffect(()=>{
    if(place)
    {
      fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${place}&appid=ce71b9d8c5255de8b809b827c004c3f6`)
      .then(res=> res.json())
      .then(data=>{
        setLocation({lat:data[0].lat,lon:data[0].lon})
      
    })
    .catch((error)=>{
      console.error('Fetching error: ', error);
      setToastMessage(`No Location found`);
      setTimeout(() => {
        setToastMessage(''); // Clear the message after the duration to hide the toast
      }, 5000);
    })
    
  }
    else{
      navigator.geolocation.getCurrentPosition((position)=>{
        setLocation({lat:position.coords.latitude,lon:position.coords.longitude}  )
      })
    }
   },[place])
  return (
  Object.keys(location).length?
    <>
     <Toast message={toastMessage} duration={5000} />
    <Navbar Location={Location} clear={clear}/>
    <WeatherReports lat ={location.lat} lon={location.lon}/>
    </>:<p>Loading</p>
  )
}

export default App
