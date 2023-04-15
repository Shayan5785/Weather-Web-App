import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch';
import styled from "styled-components";
import { CloseCircleOutlined, SearchOutlined } from '@ant-design/icons';
import SearchBox from './SearchBox';

function CurrentWeather() {

  const [city,setCity] = useState("karachi")
  const {cityName,celsius,fahrenheit} = useFetch(city)
  const [searching, setSearching] = useState(false)

  const handleSearch = () => {
    if (searching) {
      setSearching(false)
    } else {
      setSearching(true)
    }
  }

  const onSearch = value => {
    setCity(value)
  }

  if(!city) return null
  

  return (
    <Container>
      <div style={{
        position: 'relative',
        left:'15px',
        display:"flex", 
        alignItems:'center',
        }}>
        {
          searching ? <SearchBox onSearch={onSearch} /> : <h1 style={{marginRight:"10px"}}>{cityName}</h1>
        }
        
        {
          searching ? <CloseCircleOutlined onClick={handleSearch}/> : <SearchOutlined onClick={handleSearch} />
        }
        
      </div>
      <img src="" alt="SVG" />
      <p>{celsius}<span>&#176;</span>C</p>
      <p>{fahrenheit}<span>&#176;</span>F</p>
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