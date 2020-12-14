import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import PizzaBackground from '../images/pizzabackground.jpg'

const StyledHomeContent = styled.main`
  text-align: center;
  .hero {
    width: 70%;
    margin: 10px auto;
    padding: 5% 2%;
    border-radius: 10px;
    box-shadow: 1px 1px 5px black;
    background-image: url(${PizzaBackground});
    background-size: cover;
    h1 {
      color: white;
      text-shadow: 3px 3px 7px black;
      font-size: 3rem;
    }
    button {
      padding: 2% 5%;
      font-size: 3rem;
      cursor: pointer;
    }
  }
  
`


function HomeContent() {
  const history = useHistory()
  function onSubmit() {
    history.push("/pizza")
  }
  return (
    <StyledHomeContent>
      <div className="hero">
        <h1>Your favorite food delivered while coding!</h1>
        <button onClick={onSubmit}>Pizza!!!</button>
      </div>
    </StyledHomeContent>
  )
}

export default HomeContent