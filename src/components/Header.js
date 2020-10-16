import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`

`

function Header() {
  return (
    <StyledHeader>
      <h1>Lambda Eats</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/pizza">Order</Link>
      </div>
    </StyledHeader>
  )
}

export default Header