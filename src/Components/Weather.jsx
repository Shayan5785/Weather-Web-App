import React from 'react'
import styled from "styled-components";
import FutureWeather from "./FutureWeather"
import CurrentWeather from "./CurrentWeather"

function Weather() {
  return (
    <Container>
        <CurrentWeather/>
        <FutureWeather/>
    </Container>
    
  )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100vh;
`

export default Weather