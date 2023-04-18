import React from 'react'
import styled from "styled-components";
import FutureWeather from "./FutureWeather"
import CurrentWeather from "./CurrentWeather"

function Weather() {
  return (
    <WeatherContainer >
        <CurrentWeather/>
        <FutureWeather/>
    </WeatherContainer>
    
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