import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import SignUpLogin from './Pages/SignUpLogin'
import Minimized from './Pages/Minimized'
import Footer from './Components/Footer/Footer'
import Product from './Pages/Product'
import All_product_page from './Components/All_Product/All_product_page'
import Login from './Components/login/Login'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import Checkout from './Pages/Checkout'
import PrivateRoutes from './Components/PrivateRoutes'
import Error from './Pages/Error'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Contact' element={<PrivateRoutes><Contact></Contact></PrivateRoutes>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/Sign Up' element={<SignUpLogin></SignUpLogin>}></Route>
        <Route path='/Minimized' element={<Minimized></Minimized>}></Route>
        <Route path='/Home/all_product' element={<All_product_page></All_product_page>}></Route>
        <Route path='/Product' element={<PrivateRoutes><Product></Product></PrivateRoutes>}>
          <Route path=':productId' element={<PrivateRoutes><Product></Product></PrivateRoutes>}></Route>
        </Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Cart' element={<PrivateRoutes><Cart></Cart></PrivateRoutes>}></Route>
        <Route path='/Wishlist' element={<PrivateRoutes><Wishlist></Wishlist></PrivateRoutes>}></Route>
        <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
  )
}

export default App
