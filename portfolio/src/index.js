import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SCSS/index.scss'
import App from './App'
import Loader from './Loader'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Suspense fallback={Loader}>
      <App />
    </Suspense>
  </React.StrictMode>
)