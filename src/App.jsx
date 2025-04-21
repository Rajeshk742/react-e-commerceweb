import React, { useState } from 'react'
import Navbar from "./component/Navbar"
import Product from './component/Product'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProductDetails from './component/ProductDetails'
import SearchItems from './component/SearchItems'
import Cart from './component/Cart'
import {items} from './component/Data'



const App = () => {
 const [data, setData] = useState([...items]);
 const [cart, setCart] = useState([]);
  return (
    <>

    <Router>
    <Navbar setData = {setData} cart = {cart}/>
 
      <Routes>
        <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />}/>
        <Route path="/product/:id" element={ <ProductDetails cart={cart} setCart={setCart}/>}/>
        <Route path="/search/:term" element={ <SearchItems cart={cart} setCart={setCart}/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App
