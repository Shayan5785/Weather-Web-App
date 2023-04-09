import { useEffect, useState } from 'react'

const useFetch = (city) => {
  const [loc, setLoc] = useState()
    useEffect(() => {
        const key = 'bc13bd55fbd3c30a057d37271857570a'
    
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`)
        .then( res =>  res.json())
        .then( data => {
          const val = data.find( res => new RegExp(res.name, 'i').test(city) )
          return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${val.lat}&lon=${val.lon}&appid=${key}`)
        })
        .then( res => res.json())
        .then( data => setLoc(data))
        .catch( err => console.log("Invalid location"))
      }, [city])

  return loc
}

export default useFetch