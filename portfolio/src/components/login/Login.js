import React, { useState} from "react"
import './Login.css'
//import {CiUser} from 'react-icons/ci' 


function Login({setToken}) {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleUsername (e) {
        e.preventDefault()
        setUsername(e.target.value)
    }

    function handleEmail (e) {
        e.preventDefault()
        setEmail(e.target.value)
    }

    function handlePassword (e) {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const token = {
            username,
            email,
            password
        }
        setToken(token)
    }


    return(
        <div className="login">
            
            <div className="login-container">
            <p className="logo-title">Portfolio-</p>
            <p className="l-title">Login</p> 
            <div className="login-card">
                   <div className="i-left">
                <div className="i-name">
                <form onSubmit={handleSubmit}>
                    
                    <input 
                            type="text" 
                            onChange={handleUsername}
                            placeholder="Username"
                            className="login-name"
                            />
                           
                            <input 
                            type="password" 
                            onChange={handlePassword}
                            placeholder="Password"
                            className="login-password"
                            
                            />
                        <button className="l-btn">Login</button>
                        
                        </form>

                </div>

            </div>


            </div>
   

            </div>
         <div className="signup-container">
        <p className="logo2-title">Ally</p>
         <p className="s-title">Sign Up</p>
         <div className="signup-card">
                 <div className="i-right">
                <div className="i-name">

                <form onSubmit={handleSubmit}>
                        
                            <input 
                            type="text" 
                            onChange={handleUsername}
                            placeholder="Username"
                            className="signup-name"
                            />

                            <input 
                            type="text" 
                            onChange={handleEmail}
                            placeholder="Email"
                            className="signup-email"
                            />
                            
                            <input 
                            type="password" 
                            onChange={handlePassword}
                            placeholder="Password"
                            className="signup-password"
                            
                            />
                        <button className="s-btn">Sign Up</button>
                        
                        </form>
                </div>
            </div>
        </div>
         </div>
            
           
        </div>
    )
}
export default Login