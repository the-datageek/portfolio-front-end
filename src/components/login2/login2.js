
import React, { useState } from "react"
import * as Components from './Components'
import './login2.css'
import {Navigate} from 'react-router-dom'



function Login2() {
  
    const [loggedIn, setLoggedIn] = useState(false);
    const [signIn, toggle] = React.useState(true);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    const handleRegister = () => {
  
  
      fetch("https://portfolio-project-sksc.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        })
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
  
    };
  
    const handleLogin = (event) => {
      event.preventDefault();
  
      fetch("http://127.0.0.1:9292/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle successful login
          console.log(data);
        })
        .catch((error) => {
          // Handle login error
          console.error(error);
        });
        setLoggedIn(true);
    };
  
      return(
        <div className="login">
          <div className="i-left">
               <img src={'https://tinyurl.com/yc5e6bms'} alt="Add Image"  className="log-img" />
          </div>
          
          <div className="i-right">

          <Components.Container>
                  {loggedIn && <Navigate to="/bio" />}
  
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign Up</Components.Title>
                      <Components.Input type='text' placeholder='Name' value={name} onChange={event => setName(event.target.value)}/>
                      <Components.Input type='email' placeholder='Email'value={email} onChange={event => setEmail(event.target.value)}/>
                      <Components.Input type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)}/>
                      <Components.Button onClick={handleRegister}>Sign Up</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>
  
              <Components.SignInContainer signinIn={signIn}>
            
                   <Components.Form>
                       <Components.Title>Log in</Components.Title>
                       <Components.Input type='email' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
                       <Components.Input type='password' placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
                       <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                       <Components.Button onClick={handleLogin}>Log In</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>
  
              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>
  
                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Good to see you again!</Components.Title>
                      <Components.Paragraph>
                      Let's pick up where we left off  </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                          log in
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>
  
                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Experience the Difference</Components.Title>
                        <Components.Paragraph>
                        Sign Up and Discover the Benefits of Our Service.
  
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                              Sign Up
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>
  
          </Components.Container>

          </div>
        
        </div>
      )
  }
  
  export default Login2;