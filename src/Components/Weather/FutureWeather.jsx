import React, { useContext, } from 'react'
import styled from 'styled-components'
import useFetch from '../../Hooks/useFetch'
import CityContext from '../../Context/CityContext'

function FutureWeather() {
  const city = useContext(CityContext);

  const {futureDays, futureCelsius, futureIcon}  = useFetch(city)
  // const [futureDays , setFutureDays ] = useState([])
  // const [futureCelsius , setFutureCelsius ] = useState([])
  // const [futureIcon , setFutureIcon ] = useState([])

  // useEffect(() => {
  //     const fetchFutureForecast  = async () => {
  //       try {
  //         const wetRes = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=24.8546842&lon=67.0207055&appid=bc13bd55fbd3c30a057d37271857570a');
  //         const wetData = await wetRes.json();
  //         const y = wetData.list.filter(element => (/00:00:00/.test(element.dt_txt)));
          
  //         setFutureDays(y.map(item => {
  //           const date = new Date(item.dt_txt);
  //           const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //           return days[date.getDay()];
  //         } ))
  //         setFutureCelsius(y.map(item => (Math.round(item.main.feels_like - 273.15))))
  //         const iconPromises = y.map(async item => {
  //           const weatherIcon = item.weather[0].icon
  //           const iconRes = await fetch(`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
  //           return iconRes.url
  //         })
  //         const iconUrls = await Promise.all(iconPromises)
  //         setFutureIcon(iconUrls)
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
    
  //     fetchFutureForecast ();

  // }, []);
  // console.log(futureDays)
  // console.log(futureCelsius)
  // console.log(futureIcon)

  // const [futureDays, futureCelsius, futureIcon] = useFetch('karachi')
  // console.log(futureDays, futureCelsius, futureIcon)

  return ( 
    <Container>

      {futureDays.map( (item,index) => (
          <div key={index} >
            <p>{item}</p>
            <img 
              src={futureIcon[index]} 
              style={{width:'50px'}} 
              alt="SVG" />
            <p>{futureCelsius[0]}</p>
          </div>
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
