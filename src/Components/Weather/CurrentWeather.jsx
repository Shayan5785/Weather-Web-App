import React, { useState } from 'react'
import useFetch from '../../Hooks/useFetch';
import styled from "styled-components";
import CitySearchBar from '../Common/CitySearchBar';
import Error from '../Error/Error';

function CurrentWeather() {

  const [city,setCity] = useState("karachi")
  const {
    cityName,
    celsius,
    fahrenheit,
    description,
    icon,
    err
  } = useFetch(city)
  const [searching, setSearching] = useState(false)

  // toggles the searching state
  const handleSearch = () => {
    if (searching) {
      setSearching(false)
    } else {
      setSearching(true)
    }
  }
// sets the city state to the value passed as a parameter
  const onSearch = value => {
    setCity(value)
    setSearching(false)
  }

  return (
    <Container>
      <Error err={err} />
      <CitySearchBar 
       city={cityName} 
       searching={searching} 
       handleSearch={handleSearch} 
       onSearch={onSearch} 
      />
      <img src={icon} alt="SVG" />
      <p>{description}</p>
      <p>{celsius}<span>&#176;</span>C</p>
      <p>{fahrenheit}<span>&#176;</span>F</p>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export default CurrentWeather

// // API
// // http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=bc13bd55fbd3c30a057d37271857570a
// // https://api.openweathermap.org/data/2.5/weather?lat=24.8546842&lon=67.0207055&appid=bc13bd55fbd3c30a057d37271857570a

// for icon png 
// https://openweathermap.org/img/wn/10d@2x.png