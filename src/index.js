import React from 'react'
import ReactDOM from 'react-dom'
import '@statisticsnorway/ssb-component-library/src/main.scss'

import { AppContextProvider } from './context/AppContext'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
