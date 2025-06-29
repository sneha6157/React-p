import React from 'react'
import { Header } from './Components/Header'
import { Route, Routes } from 'react-router-dom'


import Cart from './pages/Cart';
import Product from './pages/Product';
import About from './pages/About';
import Home from './pages/Home';
import { Banner } from './Components/Banner';
import { Footer } from './Components/Footer';



export default function App() {
  return (
   <>
 <Header/>
<Banner/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Product' element={<Product/>}/>
   <Route path='/About' element={<About/>}/>
  <Route path='/Cart' element={<Cart/>}/>
 </Routes>
  <Footer/>
   </>
  )
}
