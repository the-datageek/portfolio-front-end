import React from 'react'
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import './navbar.css'


export default function Navbar(){

  return (
  
  <nav className="nav">
    
    <Link to="/bio" className="site-title">Portfolio-genie</Link> 
    <ul>
      
        {/* <li>
        <CustomLink to="/bio">Home</CustomLink>
      </li> */}
      <li>
        <CustomLink to="/register">Profile</CustomLink>
        </li>
      <li>
        <CustomLink to="/">Logout</CustomLink>
      </li>
    </ul>

  </nav>
  )
}

function CustomLink({to, children, ...props}){
 const resolvedPath = useResolvedPath(to)
 const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return(
    <li className={isActive === to ? "active" : ""}>

      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

