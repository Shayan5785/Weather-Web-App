import React from 'react'
import styled from 'styled-components'


function Error({err}) {
    if (err === null) return null
  return ( 
    <Container>
        {err}
    </Container>
   )
}

const Container = styled.div`
    position: absolute;
    top: 10vh;
    background-color: #ffdddd;
    color: #ff0000;
    border: 1px solid #ff0000;
    padding: 10px;
    margin-bottom: 10px;
`

export default Error