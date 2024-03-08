import React, {useState} from 'react'
import Header from './components/Header/Header'
import News from './components/Tazelikler/News'
import Makala from './components/Makala/Makala'
import Multi from './components/Multi/Multi'
import Gallery from './components/Gallery/Gallery'
import End from './components/End/End'


const App = () => {
  return (
    <>
       
       <Header />
       <News />
       <Makala />
       <Multi />
       <Gallery />
       <End />
    </>
  )
}

export default App
