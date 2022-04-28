import React from 'react'

import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/lib/integration/react'

import { Helmet } from 'react-helmet'

import { App } from './App'

import { store } from './store'
// import { persistor, store } from './store'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Helmet defaultTitle="$ 0" titleTemplate="%s // Adventure" />

    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
)
