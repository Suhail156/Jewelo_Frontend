import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/User/Login'
import Signup from './Components/User/Signup'
import Navbar from './Components/Layouts/Navbar'
import Footer from './Components/Layouts/Footer'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetailes'
import EditProducts from './Pages/EditProducts'
import EditProductPage from './Pages/EditProductPage'
import AddProduct from './Pages/AddProduct'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/product/:id' element={<ProductDetails/>} />
        {/* <Route path='/edit-product/:id' element={<EditProducts/>} /> */}
        <Route path='/edit-product/:id' element={<EditProductPage/>} />
        <Route path='/add-product' element={<AddProduct/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
