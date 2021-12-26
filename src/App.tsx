import React from 'react'
import Header, {HeaderVariant} from './components/Header'
import './assets/styles/App.scss'

export default function App() {
  return (
    <div>
      <Header onClick={(num) => console.log('click', num)} width='200px' height='200px' variant={HeaderVariant.outlined} />
    </div>
  )
}
