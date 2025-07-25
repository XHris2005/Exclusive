import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from '../assets/Logo.png'
import cart from '../assets/cart.png'
import Fill_Heart from '../assets/Fill Heart.png'
import Component from '../assets/Component 2.png'
import user_img from '../assets/user.png'
import more from '../assets/more.png'
import order from '../assets/icon-mallbag.png'
import cancel from '../assets/icon-cancel-b.png'
import review from '../assets/Icon-Reviews.png'
import logout_img from '../assets/Icon-logout.png'
import Minimized_nav from '../Minimized_nav/Minimized_nav';
import { CartContext } from '../../Context/CartContext';
import { WishlistContext } from '../../Context/WishlistContext';
import { AuthContext } from '../../Context/AuthContext';
const Navbar = () => {
    const {getTotalCartItems} = useContext(CartContext)
    const {getTotalWishlists} = useContext(WishlistContext)
    const {user, logOut} = useContext(AuthContext)
    const [menu, setMenu] = useState('Home')
    const [account, setAccount] = useState(null)
    return (  
        <>
        <div className='navbar'>
            <div className="nav_logo">
                <img src={Logo} alt="" />
            </div>
            <ul className='nav_menu'>
                <li onClick={()=>{setMenu('Home')
                    window.scrollTo(0,0)
                }}><Link to='/'>Home</Link> {menu=== 'Home' ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu('Contact')
                    window.scrollTo(0,0)
                }}> <Link to = '/Contact'>Contact</Link> {menu=== 'Contact' ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu('about')
                    window.scrollTo(0,0)
                }}><Link to = '/about'>about</Link> {menu=== 'about' ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu('Sign Up')
                    window.scrollTo(0,0)
                }}><Link to = '/Sign Up'>Sign Up</Link> {menu=== 'Sign Up' ? <hr/> : <></>}</li>
            </ul>
            <div className="search-with-cart">
                <div className="search_box">
                    <input type="text" placeholder='what are you looking for? '/>
                    <img src={Component} alt="" />
                </div>
                <div className="icons">
                    <img src={Component} alt="" className='minimized_component' style={{width: '30px', transform: 'translateX(8px)'}} />
                    {menu=== 'Sign Up' ? <></> : <Link to='/Wishlist' className='wishlink'><img onClick={()=> window.scrollTo(0,0)} src={Fill_Heart} alt="" />
                    <div className="nav-wish-count">{getTotalWishlists()}</div>
                    </Link>}
                    {menu=== 'Sign Up' ? <></> : <Link to='/Cart' className='cart_Link'><img onClick={()=> window.scrollTo(0,0)} src={cart} alt="" style={{width: '30px', transform: 'translateY(4px)'}}/>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                    </Link>}
                    {menu === 'about' || menu === 'Contact' ? <img src={user_img} alt="" style={{width: '35px', transform: 'translateX(-4px)'}} /> : <></>}
                    {user && menu === 'Home' ? <div className='account_div' onClick={()=> {
                        setAccount(account === 'active' ? null : 'active')
                        window.scrollTo(0,0)}
                    }  style={{backgroundColor: account === 'active' ? "rgb(210, 71, 71)" : 'white'}}><img src={user_img} style={{width: '33px', transform: 'translateX(-4px)'}}></img></div> : <></>}
                    <Link to = '/Minimized' className='more'> <img src={more} style={{width: '22px'}}></img> </Link>
                </div>
            </div>
            { account === 'active' ? 
            <div className="account_dropdown">
                <div className="contents">
                    <img src={user_img} alt="" />
                    <p>Manage My Account</p>
                </div>
                <div className="contents">
                    <img src={order} alt="" />
                    <p>My Order</p>
                </div>
                <div className="contents">
                    <img src={cancel} alt="" />
                    <p>My Cancellations</p>
                </div>
                <div className="contents">
                    <img src={review} alt="" />
                    <p>My Reviews</p>
                </div>
                <div className="contents" onClick={()=>{
                    logOut()
                    setAccount(()=> null)
                }}>
                    <img src={logout_img} alt="" />
                    <p>Logout</p>
                </div>
            </div>
            : <></>
            }
        </div>
        </>
    );
}

export default Navbar; 