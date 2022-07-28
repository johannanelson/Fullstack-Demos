import React from 'react'
import { render } from 'react-dom'
import App from './components/App.js'

// ANY COMPONENT nested inside of <Provider /> will have access to the passed in store WHENEVER it calls connect().

render(<Provider store={store}>
  <App />
  </Provider>
, document.getElementById('app'))
