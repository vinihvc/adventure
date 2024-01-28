import React from 'react'
import ReactDOM from 'react-dom/client'
import { HomePage } from './app/page'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
)
