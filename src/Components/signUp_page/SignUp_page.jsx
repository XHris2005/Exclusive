import React from "react";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp_page.css'
import signup_side_image from '../assets/signup_side_image.png'
import icon_google from '../assets/Icon-Google.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
const SignUp_page = () => {
    const {signUp} = useContext(AuthContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (event)=>{
        const success = signUp(email, password)
        if (success) navigate('/')
            else alert('User already exists')
    }
    return (  
        <>
        <div className="signup_nav">
            <h3>Home / <span>SignUp</span></h3>
        </div>
        <div className="signup_page">
            <div className="signup_page_left">
                <img src={signup_side_image} alt="" />
            </div>
            <div className="signup_page_right">
                <h1>Create an account</h1>
                <p>Enter your details below</p>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form_contents">
                        <input type="text" placeholder="name" onChange={(e)=> setName(e.target.value)}/>
                        <input type="email" placeholder="email or phone number" onChange={(e)=> setEmail(e.target.value)}/>
                        <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
                        <button>Create account</button>
                        <div className="google_signUp">
                            <img src={icon_google} alt="" />
                            SignUp with Google
                        </div>
                        <div className="to_login">
                            Already have an account? 
                            <Link to={'/Login'} onClick={()=> window.scrollTo(0,0)}>Login</Link>
                        </div>
                    </div>
                </form>

            </div>
        </div>
        </>
    );
}

export default SignUp_page;