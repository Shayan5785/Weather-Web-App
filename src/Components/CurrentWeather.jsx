import React, { useEffect, useState } from 'react'
import useFetch from '../Hooks/useFetch';
import styled from "styled-components";

function CurrentWeather() {
  const [city,setCity] = useState("islamabad")

  console.log(useFetch(city))

  return (
    <Container>
      <h1>{city}</h1>
      <img src="" alt="SVG" />
      <p>Degree in Celcius</p>
      <p>Degree in Farenheit</p>
      <p>Condition</p>
    </Container>
  )
}

const Container = styled.div``
export default CurrentWeather

// API
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=bc13bd55fbd3c30a057d37271857570a
// https://api.openweathermap.org/data/2.5/weather?lat=24.8546842&lon=67.0207055&appid=bc13bd55fbd3c30a057d37271857570a