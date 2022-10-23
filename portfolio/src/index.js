import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SCSS/index.scss'
import App from './App'
import Loader from './Loader'

const root = ReactDOM.createRoot(document.getElementById('root'))

const min = 400
const max = 800

const time = Math.random() * (max - min) + min

root.render(
  <React.StrictMode>
    <Suspense fallback={Loader}>
      <App time={time}/>
    </Suspense>
  </React.StrictMode>
)
