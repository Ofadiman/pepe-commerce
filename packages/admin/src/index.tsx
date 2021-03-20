import './index.css'

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'
import { reportWebVitals } from './reportWebVitals'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('#root')
)

reportWebVitals()
