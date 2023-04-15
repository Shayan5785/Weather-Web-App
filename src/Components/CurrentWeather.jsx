import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch';
import styled from "styled-components";
import { SearchOutlined } from '@ant-design/icons';
import InputCom from './InputCom';

function CurrentWeather() {

  const [city,setCity] = useState("london")
  const {cityName,celsius,fahrenheit} = useFetch(city)
  const [searching, setSearching] = useState(false)

  const handleSearch = () => {
    console.log('Search')
    if (searching) {
      setSearching(false)
    } else {
      setSearching(true)
    }
  }


  if(!city) return null
  

  return (
    <Container>
      <div style={{
        display:"flex", 
        alignItems:'center',
        }}>
        {
          searching ? <InputCom handleSearch /> : <h1 style={{marginRight:"10px"}}>{cityName}</h1>
        }
        
        
        <SearchOutlined onClick={handleSearch} />
      </div>
      <img src="" alt="SVG" />
      <p>{celsius}</p>
      <p>{fahrenheit}</p>
      <p>Condition</p>
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

// API
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=bc13bd55fbd3c30a057d37271857570a
// https://api.openweathermap.org/data/2.5/weather?lat=24.8546842&lon=67.0207055&appid=bc13bd55fbd3c30a057d37271857570a