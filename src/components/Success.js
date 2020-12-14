import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NoSoup from '../images/no-soup-for-you-next.jpg'
import PizzaSuccess from '../images/pizza-success.png'

const StyledSuccess = styled.div`
  text-align: center;
    a {
      font-size: 2.5rem;
      color: blue;
      text-decoration: none;

    }
    img {
      box-shadow: 1px 1px 5px black;
      margin: 2%2rem;
    }
`

function Success(props) {
  return (
    props.order[0] ?
    <StyledSuccess>
      <img src={PizzaSuccess} alt="Yay It's Pizza Time!!!" />
      <h1>Your Order Has Been Placed Successfully!</h1>
      <h2>Below Is The Info On Your Order</h2>
      <div>
        <p><strong>Name: </strong>{props.order[0].name}</p>
        <p><strong>Sauce: </strong>{props.order[0].sauce}</p>
        {props.order[0].glutenFree ? <p><strong>Gluten Free!</strong></p> : null}
        <p><strong>How Many Pizzas: </strong> {props.order[0].amountOfItems}</p>
        {props.order[0].toppings.length > 0 ? <p><strong>Toppings: </strong>{props.order[0].toppings.map(top => <span key={top}> {top}</span>)}</p> : <p>No Toppings</p>}
        {props.order[0].specialInstructions.length > 0 ? <p><strong>Special Instructions: </strong>{props.order[0].specialInstructions}</p> : null}
        <p><strong>Order Created At: </strong>{props.order[0].createdAt}</p>
      </div>
    </StyledSuccess> :
    <StyledSuccess><img src={NoSoup} alt="No Soup For You!" /><div><Link to="/pizza">You Must First Place An Order</Link></div></StyledSuccess>
    
  )
}

export default Success