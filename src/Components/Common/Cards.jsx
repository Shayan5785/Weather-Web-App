import React from 'react'
import styled from 'styled-components'

function Cards({item, futureIcon, futureCelsius}) {
  return (
    <Container>
        <p>{item}</p>
        <img 
        src={futureIcon} 
        style={{width:'50px'}} 
        alt="SVG" />
        <p>{futureCelsius}</p>
    </Container>
  )
}

const Container = styled.div `
  border-radius: 4px;
  margin: 2px 4px;
  padding: 2px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
`

export default Cards