import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

// AOS 초기화
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




















