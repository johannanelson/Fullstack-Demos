import React from 'react'
import ReactDOM from 'react-dom'
import Audio from './Audio'
import { BrowserRouter } from 'react-router-dom'

// 1. Router
// 2. Routes
// 3. Links

ReactDOM.render(
  <BrowserRouter>
    <Audio />
  </BrowserRouter>,
  document.getElementById('app')
)
