import { useEffect, useState } from 'react'

const useFetch = (city) => {
  const [cityName, setCityName] = useState()
  const [celsius , setCelsius ] = useState()
  const [fahrenheit , setFahrenheit ] = useState()
  const [description , setDescription ] = useState()
  const [icon , setIcon ] = useState()
  const [err , setErr ] = useState(null)

  const [futureDays , setFutureDays ] = useState([])
  const [futureCelsius , setFutureCelsius ] = useState([])
  const [futureIcon , setFutureIcon ] = useState([])

    useEffect(() => {
        const key = 'bc13bd55fbd3c30a057d37271857570a'

        const fetchData = async () => {
          try{
            // retrieves geo coordinates
            const goeRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`)
            const geoData = await goeRes.json()
            const val = geoData.find( res => new RegExp(res.name, 'i').test(city) )
            // fetching Future Forecast
            const wetRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${val.lat}&lon=${val.lon}&appid=bc13bd55fbd3c30a057d37271857570a`);
            const wetData = await wetRes.json();
            const y = wetData.list.filter(element => (/12:00:00/.test(element.dt_txt)));
            
            setFutureDays(y.map(item => {
              const date = new Date(item.dt_txt);
              const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
              return days[date.getDay()];
            } ))
            setFutureCelsius(y.map(item => (Math.round(item.main.feels_like - 273.15))))
            const iconPromises = y.map(async item => {
              const weatherIcon = item.weather[0].icon
              const iconRes = await fetch(`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
              return iconRes.url
            })
            const iconUrls = await Promise.all(iconPromises)
            setFutureIcon(iconUrls)

            // search for the city within the returned data
            const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${val.lat}&lon=${val.lon}&appid=${key}`)
            const weatherData = await weatherRes.json()
            // console.log(weatherData, val.lat)
            // api to get weather icon
            let weatherIcon = weatherData.weather[0].icon
            const iconRes = await fetch(`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
            setCityName(val.name)
            setCelsius(Math.round(weatherData.main.feels_like - 273.15))
            setFahrenheit( Math.round((weatherData.main.feels_like - 273.15) * 1.8 + 32))
            setDescription( weatherData.weather[0].description)
            setIcon(iconRes.url)
            setErr(null);
          } catch (err) {
            setErr("Invalid location")
          }
        }

        fetchData()
        }, [city])
  return {
    cityName,
    celsius,
    fahrenheit,
    description,
    icon,
    err,
    futureDays, 
    futureCelsius,
    futureIcon,
  }
}

export default useFetch