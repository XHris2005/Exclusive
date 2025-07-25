import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CartContextProvider from './Context/CartContext.jsx'
import WishlistContextProvider from './Context/WishlistContext.jsx'
import AuthProvider from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <CartContextProvider>
      <WishlistContextProvider>
        <App />
      </WishlistContextProvider>
    </CartContextProvider>
    </AuthProvider>
  </StrictMode>,
)
