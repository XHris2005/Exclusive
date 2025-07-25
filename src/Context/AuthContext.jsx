import React from "react";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const getInitialUser = ()=>{
        const storedUser = localStorage.getItem('authUser')
        return storedUser ? JSON.parse(storedUser) : null
    }
    const [user, setUser] = useState(getInitialUser())

    useEffect(()=>{
        const savedUser = localStorage.getItem('authUser')
        if (savedUser) setUser(JSON.parse(savedUser))
    }, [])

    const signUp = (email, password) =>{
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = storedUsers.find((u)=> u.email === email)
        if (userExists) return false

        const newUser = {email, password}
        localStorage.setItem('users', JSON.stringify([...storedUsers, newUser]));
        localStorage.setItem('authUser', JSON.stringify(newUser))
        setUser(newUser)
        return true
    }

    const login = (email, password) =>{
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = storedUsers.find((u)=> u.email === email && u.password === password)
        if(foundUser){
            setUser(foundUser)
            localStorage.setItem('authUser', JSON.stringify(foundUser))
            return true
        }
        return false;
    }
    
    const logOut = ()=>{
        setUser(null)
        localStorage.removeItem('authUser')
    }
    return (  
        <>
        <AuthContext.Provider value ={{user, signUp, login, logOut}}>
            {children}
        </AuthContext.Provider>
        </>
    );
}

export default AuthProvider;