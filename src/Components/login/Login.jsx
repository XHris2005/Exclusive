import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './Login.css'
import signup_side_image from '../assets/signup_side_image.png'
import { AuthContext } from "../../Context/AuthContext";
const Login = () => {
    const {login} = useContext(AuthContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (event)=>{
        const success = login(email, password)
        if (success) navigate('/')
            else alert('user not found')
    }
    return (  
        <>
        <div className="login_nav">
            <h3><Link to={'/'}>Home</Link> / <span>Login</span></h3>
        </div>
        <div className="login_page">
            <div className="login_page_left">
                <img src={signup_side_image} alt="" />
            </div>
            <div className="login_page_right">
                <h1>Log in to Exclusive</h1>
                <p>Enter your details below</p>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form_contents">
                        <input type="email" placeholder="email or phone number" onChange={(e)=> setEmail(e.target.value)}/>
                        <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
                        <div className="button_password">
                            <button>Login</button>
                            Forgotten password?
                        </div>
                        <div className="to_signup">
                            Don't have an account? 
                            <Link to='/Sign Up' onClick={()=> window.scrollTo(0,0)}>Signup</Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
        </>
    );
}

export default Login;