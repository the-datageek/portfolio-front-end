import React from "react"
import './landing.css'
import styled from 'styled-components';


function Landing(){
     const [signIn, toggle] = React.useState(true)

     return(
       
            <div className="container">
                
                <div className="sign-up-container" signinIn={signIn}>
                <form>
                    <title>Create Account</title>
                    <input 
                            type="text" 
                            placeholder="Username"
                            className="signin-name"
                            />

                    <input 
                            type="email" 
                            placeholder="Email"
                            className="email-name"
                            />

                    <input 
                            type="email" 
                            placeholder="Email"
                            className="email-name"
                            />

                    <button className="landing-btn">Sign Up</button>

                </form>
                
                </div>

                <div className="sign-in-container" signinIn={signIn}>
                    <form>
                        <title>Sign In</title>

                        <input 
                                type="email" 
                                placeholder="Email"
                                className="email-name"
                                />

                        <input 
                                type="password" 
                                placeholder="Email"
                                className="email-name"
                                />

                        <a href="#">Forgot your Password</a>

                        <button className="landing-Button">Sign Up</button>


                    </form>

                </div>

                <div className="overlay-container" signinIn={signIn}>
                    <div classname="overlay" signinIn={signIn}>
                        <div className="left-overlay-panel">
                            <title>Welcome Back</title>
                            <p>To keep connected with us please login with your perrsonal info</p>
                            <ghostButton onClick={()=> toggle(true)}>Sign In</ghostButton>
                        </div>

                        <div className="right-overlay-panel" signinIn={signIn}>
                            <title>Hello Friend</title>
                            <p>Enter Your personal details and start your journey with us</p>
                            <ghostButton onClick={()=> toggle(false)}>Sign Up</ghostButton>

                       </div>



                </div>


            </div>


        </div>

     )
}

export default Landing