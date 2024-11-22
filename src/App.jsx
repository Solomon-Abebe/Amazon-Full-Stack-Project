import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Carousel from "./Components/Carousel/CarouselEffect"//CarouselEffect is exported as default, no need for named import{Carousel}
import Category  from './Components/Category/Category'
import Product from './Components/Category/Product/Product'
import Routing from './Router'

function App() {
  

  return (
    <>
      <div>
        <Routing/>
        </div>
       
    </>
  )
}

export default App
