import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { App } from './App'

import { store } from './store'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
