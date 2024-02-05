import React from "react"
export default function CountryList({con}){
  const [country,setCountry]=React.useState("")
  React.useState(()=>{
    fetch("https://gist.githubusercontent.com/ssskip/5a94bfcd2835bf1dea52/raw/3b2e5355eb49336f0c6bc0060c05d927c2d1e004/ISO3166-1.alpha2.json")
    .then(res=>res.json())
    .then(data=>setCountry(data))
  }
  ,[])
  return(
    <>
    {country&&console.log(country[con])}
    {country?country[con]:"Loading"}
    </>
  )
}