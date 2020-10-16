import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
  display: flex;
  padding: 2% 5%;
  justify-content: space-around;
  align-items: center;
  background-color: #333;
  h1 {
    color: white;
  }

  a {
    font-size: 1.5rem;
    padding: 5px 20px;
    margin-right: 2%;
    background-color: white;
    color: black;
    text-decoration: none;
  }
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