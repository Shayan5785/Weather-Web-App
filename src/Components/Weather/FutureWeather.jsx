import React, { useContext, } from 'react'
import styled from 'styled-components'
import useFetch from '../../Hooks/useFetch'
import CityContext from '../../Context/CityContext'
import Cards from '../Common/Cards';

function FutureWeather() {
  const city = useContext(CityContext);
  console.log("fw")
  const {futureDays, futureCelsius, futureIcon}  = useFetch(city)
  return ( 
    <Container>
      {futureDays.map( (item,index) => (
        <Cards 
          key={index} 
          item={item} 
          futureIcon={futureIcon[index]} 
          futureCelsius={futureCelsius[index]
        }/> 
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  p { text-align: center }
`

export default FutureWeather

// api.openweathermap.org/data/2.5/forecast?lat=24.8546842&lon=67.0207055&appid=bc13bd55fbd3c30a057d37271857570a
// // https://api.openweathermap.org/data/2.5/weather?lat=24.8546842&lon=67.0207055&appid=bc13bd55fbd3c30a057d37271857570a
