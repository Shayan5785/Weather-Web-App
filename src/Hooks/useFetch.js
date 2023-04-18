import { useEffect, useState } from 'react'

const useFetch = (city) => {
  const [cityName, setCityName] = useState()
  const [celsius , setCelsius ] = useState()
  const [fahrenheit , setFahrenheit ] = useState()
  const [description , setDescription ] = useState()
  const [icon , setIcon ] = useState()
  const [err , setErr ] = useState(null)

    useEffect(() => {
        const key = 'bc13bd55fbd3c30a057d37271857570a'

        const fetchData = async () => {
          try{
            // retrieves geo coordinates
            const goeRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`)
            const geoData = await goeRes.json()
            const val = geoData.find( res => new RegExp(res.name, 'i').test(city) )
            // search for the city within the returned data
            const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${val.lat}&lon=${val.lon}&appid=${key}`)
            const weatherData = await weatherRes.json()
            // api to get weather icon
            let weatherIcon = weatherData.weather[0].icon
            const iconRes = await fetch(`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`)
            setCityName(weatherData.name)
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

  return {cityName,celsius,fahrenheit,description,icon,err}
}

export default useFetch