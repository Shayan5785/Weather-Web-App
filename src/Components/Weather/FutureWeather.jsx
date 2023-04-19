import React, { useEffect } from 'react'
import styled from 'styled-components'
import useFetch from '../../Hooks/useFetch'

function FutureWeather() {

  // const date = new Date(1681938000)
  // console.log(date)

  const fetchData = async () => {
    try {
      const wetRes = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=24.8546842&lon=67.0207055&appid=bc13bd55fbd3c30a057d37271857570a');
      const wetData = await wetRes.json();
      const x = wetData.list.filter((item,index) => index < 10);
      x.forEach((element,index) => {
        console.log(index)
        console.log(element.dt_txt)
      });
      // console.log(x[0].)
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
  // useEffect(() => {
  // }, []);
  
  
  const {icon} = useFetch("islamabad")

  return (
    <Container>
      <div>
        <p>Day</p>
        <img 
          src={icon} 
          style={{width:'50px'}} 
          alt="SVG" />
        <p>temp</p>
      </div>
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
