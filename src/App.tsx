import React from 'react'
import Header, {HeaderVariant} from './components/Header'
import './assets/styles/App.scss'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Header width='200px' height='200px' variant={HeaderVariant.outlined} />
      <Main />
      <Footer/>
    </div>
  )
}
