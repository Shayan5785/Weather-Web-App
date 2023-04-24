import React, { useState } from 'react'
import styled from "styled-components";
import FutureWeather from "./FutureWeather"
import CurrentWeather from "./CurrentWeather"
import CityContext from '../../Context/CityContext';

function Weather() {
  const [city,setCity] = useState("islamabad")
  

  return (
    <CityContext.Provider value={[city,setCity]}>
    <WeatherContainer >
      <CurrentWeather/>
      <FutureWeather/>
    </WeatherContainer>
    </CityContext.Provider>
    
  )
}

  // Weather
  // CurrentWeather
  // FutureWeather
  // Error
  // CitySearchBar
  // SearchBox


const WeatherContainer  = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
`

export default Weather