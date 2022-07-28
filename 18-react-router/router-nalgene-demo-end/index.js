import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Blue = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Cerulean Blue Nalgene</h1>
      <img src="./public/blue.jpg" alt="blue" />
      <h4>Price: ${props.price}</h4>
    </div>
  )
}

const Green = (props) => {
  return (
    <div>
      <h1>Green Nalgene</h1>
      <img src="./public/green.jpg" />
    </div>
  )
}

const Pink = (props) => {
  return (
    <div>
      <h1>Pink Nalgene</h1>
      <img src="./public/pink.jpg" />
    </div>
  )
}

const Home = (props) => {
  return (
    <div>
      <h1>An Assortment of Nalgene Bottles.</h1>
      <img src="./public/outdoors.jpeg" />
    </div>
  )
}

const Main = (props) => {
  return (
    <BrowserRouter>
    <div id='container'>
    <div id='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/blue'>Blue</Link>
      <Link to='/green'>Green</Link>
      <Link to='/pink'>Pink</Link>

    </div>

    <div id='main-section'>
      <Route path='/blue' render = {(routeProps) => (
        <Blue
        price={14.99}
        {...routeProps}
        />
      )}></Route>
      <Route path='/green' component={Green}></Route>
      <Route path='/pink' component={Pink}></Route>
      <Route exact path='/' component={Home}></Route>
    </div>
  </div>
    </BrowserRouter>

  )
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
