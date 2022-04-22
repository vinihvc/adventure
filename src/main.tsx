import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import { App } from './App'

import { persistor, store } from './store'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
