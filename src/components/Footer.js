import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  text-align: center;
  background-color: #333;
  color: white;
  padding: 2% 5%;
  margin-top: 2%;
`

function Footer() {
  return (
    <StyledFooter>
      <h1>Lambda Eats</h1>
    </StyledFooter>
  )
}

export default Footer